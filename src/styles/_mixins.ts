export const size = (width: string, height: string) => `width: ${width}; height: ${height};`;
export const maxSize = (width: string) => `width: 100%; max-width: ${width};`;

// Img
export const imgSize = () => `display: block; max-width: 100%; height: auto;`

// Flex
export const flexCenter = () => `display: flex; align-items: center; justify-content: center;`;

// Margin
export const marginRight = (right: string) => `margin-right: ${right}px;`;
export const marginLeft = (left: string) => `margin-left: ${left}px;`;
export const marginTop = (top: string) => `margin-top: ${top}px;`;
export const marginBottom = (bottom: string) => `margin-bottom: ${bottom}px;`;
export const marginBlock = (block: string) => `margin-block: ${block}px;`;
export const marginInline = (inline: string) => `margin-inline: ${inline}px;`;

// Padding
export const paddingRight = (right: string) => `padding-right: ${right}px;`;
export const paddingLeft = (left: string) => `padding-left: ${left}px;`;
export const paddingTop = (top: string) => `padding-top: ${top}px;`;
export const paddingBottom = (bottom: string) => `padding-bottom: ${bottom}px;`;
export const paddingBlock = (block: string) => `padding-block: ${block}px;`;
export const paddingInline = (inline: string) => `padding-inline: ${inline}px;`;