import styled from "@emotion/styled";

const MediaBelive = () => {
  return (
    <MediaBeliveBlock>
        <div className="title-block">Нам доверяют</div>

        <MediaBeliveStyled className="media_belive">
            <div className="flex items-center content-around">
                <img className="img" src={require('../../../assets/images/media/b1.png')} alt="Belive" />
                <img className="img" src={require('../../../assets/images/media/b2.png')} alt="Belive" />
                <img className="img" src={require('../../../assets/images/media/b3.png')} alt="Belive" />
            </div>

            <div className="flex items-center content-between">
                <img className="img" src={require('../../../assets/images/media/b4.png')} alt="Belive" />
                <img className="img" src={require('../../../assets/images/media/b5.png')} alt="Belive" />
                <img className="img" src={require('../../../assets/images/media/b6.png')} alt="Belive" />
                <img className="img" src={require('../../../assets/images/media/b7.png')} alt="Belive" />
            </div>

            <div className="flex items-center content-around">
                <img className="img" src={require('../../../assets/images/media/b8.png')} alt="Belive" />
                <img className="img" src={require('../../../assets/images/media/b9.png')} alt="Belive" />
                <img className="img" src={require('../../../assets/images/media/b10.png')} alt="Belive" />
            </div>
        </MediaBeliveStyled>
    </MediaBeliveBlock>
  );
}

const MediaBeliveBlock = styled.div`
    margin-top: 8rem;

    @media(max-width: 480px) {
        margin-top: 3rem;
    }
`

const MediaBeliveStyled = styled.div`
    background-color: #FFF;

    box-shadow: 0 0 0 100vmax #FFF;
    clip-path: inset(0 -100vmax);

    padding-block: 10rem;

    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    row-gap: 4rem;

    @media(max-width: 768px) {
        margin-top: 3rem;
    }

    @media(max-width: 480px) {
        overflow: hidden;
    
        padding-block: 2rem;

        .flex {
            gap: 1.6rem;
        }
    }
`

export default MediaBelive;
