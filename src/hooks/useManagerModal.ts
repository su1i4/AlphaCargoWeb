import { useContext, useState } from 'react';
import { ModalManagerContext } from '../providers/ModalManagerProvider';

interface IInfo {
    title?: string
    desc?: string
}

const useManagerModal = () => {
    const { setCurrentModal, currentModal } = useContext(ModalManagerContext)

    const [modalInfo, setModalInfo] = useState<IInfo | null>()

    const clearModal = () => {
        setCurrentModal(null)
    }

    const setSuccessModal = (title: string, desc: string) => {
        setModalInfo({
            title,
            desc
        })

        setCurrentModal('success')
    }

    const setLoginModal = (title: string) => {
        setModalInfo({
            title
        })

        setCurrentModal('login')
    }

    const setChangeModal = (title: string, desc: string) => {
        setModalInfo({
            title,
            desc
        })

        setCurrentModal('change')
    }

    const setOTPCodeModal = (title: string, desc: string) => {
        setModalInfo({
            title,
            desc
        })

        setCurrentModal('code')
    }

    const setPhoneModal = (title: string) => {
        setModalInfo({
            title
        })

        setCurrentModal('phone')
    }

    const setRequestDelivery = (title: string) => {
        setModalInfo({
            title
        })

        setCurrentModal('request')
    }

    return {
        modalInfo,
        setSuccessModal,
        currentModal,
        clearModal,
        setLoginModal,
        setChangeModal,
        setOTPCodeModal,
        setPhoneModal,
        setRequestDelivery
    }
}

export default useManagerModal;
