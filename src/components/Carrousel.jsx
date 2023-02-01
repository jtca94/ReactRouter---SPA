const Carrousel = () => {

    return (
        <div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/imgs/cake1.jpg" className="d-block w-100  rounded" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/imgs/cake2.jpg" className="d-block w-100 rounded" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/imgs/cake3.jpg" className="d-block w-100 rounded" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carrousel