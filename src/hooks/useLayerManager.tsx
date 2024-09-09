import {
  useCallback,
  useLayoutEffect,
  useRef,
  createContext,
  useContext,
  useMemo,
  useEffect,
  RefObject,
  ReactNode,
} from "react";

export function useEvent<T extends Function>(fn: T) {
  const fnRef = useRef(fn);

  useLayoutEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const eventCb = useCallback(
    (...args: unknown[]) => {
      return fnRef.current.apply(null, args);
    },
    [fnRef]
  );

  return eventCb as unknown as T;
}

class LayerManager {
  private children: LayerManager[] = [];
  private elemntRef: RefObject<HTMLElement>;
  private trigerRef: RefObject<HTMLElement>;

  constructor(
    elementRef: RefObject<HTMLElement>,
    trigerRef: RefObject<HTMLElement>
  ) {
    this.elemntRef = elementRef;
    this.trigerRef = trigerRef;
  }

  registerChild(child: LayerManager) {
    this.children.push(child);

    return () => {
      const index = this.children.indexOf(child);

      if (index === -1) {
        return;
      }

      this.children.splice(index, 1);
    };
  }

  isOutsideClick(target: EventTarget) {
    if (!this.elemntRef.current || !(target instanceof Node)) {
      return true;
    }

    const ignoreElemnts = [this.elemntRef.current];

    if (this.trigerRef?.current) {
      ignoreElemnts.push(this.trigerRef.current);
    }

    const clickedInside = ignoreElemnts.some((elemnt) =>
      elemnt.contains(target)
    );

    if (clickedInside) {
      return false;
    }

    const clickOutsideOfChildLayers = this.children.every((child) =>
      child.isOutsideClick(target)
    );

    if (clickOutsideOfChildLayers) {
      return true;
    }

    return false;
  }
}

const LayerContext = createContext<LayerManager | null>(null);

interface UserLayerManager {
  elementRef: RefObject<HTMLElement>;
  trigerRef?: RefObject<HTMLElement>;
  outsideClickEnabled?: boolean;
  onOutsideClick: (event: MouseEvent | TouchEvent) => void;
}

export function useLayerManager({
  elementRef,
  trigerRef,
  outsideClickEnabled = true,
  onOutsideClick,
}: UserLayerManager) {
  const layer = useMemo(
    () => new LayerManager(elementRef, trigerRef as RefObject<HTMLElement>),
    [elementRef, trigerRef]
  );

  const parentLayer = useContext(LayerContext);

  useEffect(() => {
    if (!parentLayer) {
      return;
    }

    return parentLayer.registerChild(layer);
  }, [layer, parentLayer]);

  const handleOutsideClick = useEvent(onOutsideClick);

  useEffect(() => {
    if (!outsideClickEnabled) {
      return;
    }

    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (!e.target) {
        return;
      }

      if (layer.isOutsideClick(e.target)) {
        handleOutsideClick(e);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [layer, outsideClickEnabled]);

  function renderLayer(children: ReactNode) {
    return (
      <LayerContext.Provider value={layer}>{children}</LayerContext.Provider>
    );
  }

  return { renderLayer };
}
