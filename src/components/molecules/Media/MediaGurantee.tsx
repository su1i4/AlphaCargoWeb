import styled from "@emotion/styled";

const MediaGurantee = () => {
  return (
    <MediaGuranteeBlock>
        <div className="media_gurantee-card">
            <div>
                <div className="title">Гарантия контакта с клиентом</div>

                <div className="title">100%</div>
            </div>
            <div className="media_gurantee-card-1">
                <div>
                    <img src={require('../../../assets/images/media/mediag1.png')} alt="Media Gurantee" className="img" />
                </div>
                <div>
                    <img src={require('../../../assets/images/media/mediag2.png')} alt="Media Gurantee" className="img" />
                </div>
            </div>
        </div>

        <div className="media_gurantee-card-1 media_gurantee-card-2">
                <div>
                    <img src={require('../../../assets/images/media/mediag3.png')} alt="Media Gurantee" className="img" />
                </div>
                <div className="img4">
                    <img src={require('../../../assets/images/media/mediag4.png')} alt="Media Gurantee" className="img" />
                </div>
                <div className="img5">
                    <img src={require('../../../assets/images/media/mediag5.png')} alt="Media Gurantee" className="img" />
                </div>
        </div>
    </MediaGuranteeBlock>
  );
}

const MediaGuranteeBlock = styled.div`
    width: 100%;
    background-color: #02447F;
    box-shadow: 0 0 0 100vmax #02447F;
    clip-path: inset(0 -100vmax);
    color: #FFF;

    padding-block: 8rem;

    margin-top: 10rem;
    
    .title {
        margin-bottom: 3rem;
        @media (max-width: 1000px) {
            margin-bottom: 1.6rem;
        }
    }

    .media_gurantee-card {
        display: flex;

        @media (max-width: 1000px) {
            display: block;
        }
    }

    .media_gurantee-card-1 {
        display: flex;

        gap: 3rem;

        @media (max-width: 480px) {
            display: block;

            div {
                width: 100%;
                height: 324px;
                img {
                    width: 100%;
                    height: 100%;

                    object-fit: cover;
                }

                @media (max-width: 480px) {
                    margin-bottom: 1.6rem;
                }
            }
            .img5, .img4 {
                display: none;
            }
        }

        &.media_gurantee-card-2 {
            margin-top: 3rem;

            @media (max-width: 1000px) {
                margin-top: 2rem;
            }

            @media (max-width: 480px) {
                margin-top: 1.6rem;
            }
        } 
    }

    @media (max-width: 1000px) {
        padding-block: 3rem;
        margin-top: 2rem;
    }
`

export default MediaGurantee;
