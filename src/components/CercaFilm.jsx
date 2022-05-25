import { Container, Row, Col, Form } from "react-bootstrap";
import CardFilm from "./CardFilm";


const CercaFilm = (props) => {
    return (
        <div className="text-center">
            <div className="d-flex flex-column" style={{zIndex: 10000}}>
                <Form.Select className="mb-3" style={{ width: '200px', textAlign: 'center', margin: 'auto', padding: '5px' }} onChange={props.getTypeSelect}>
                    <option value="movie">Film</option>
                    <option value="tv">Serie Tv</option>
                </Form.Select>

                <input type="text" style={{ width: '200px', textAlign: 'center', margin: 'auto', padding: '5px' }} placeholder="Search" onChange={props.getQuerySearch} />
            </div>



            <Container fluid style={{ padding: '30px' }}>
                <Row xs={1} sm={2} md={3} lg={4} xxl={5}>
                    {
                        //ricerca film
                        props.searchResults.map((item, index) => (

                            item.title ?

                                <Col className="d-flex flex-column align-items-center mb-3" key={index}>
                                    {item.title}
                                    {
                                        item.poster_path ?
                                            <CardFilm style={{ width: '100%', height: '100%' }}
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            img={item.poster_path ? 
                                                "https://image.tmdb.org/t/p/original" + item.poster_path : require("../images/test-foto.jpg")}
                                            year={item.release_date ? 
                                                item.release_date.substring(0, 4) : ""}
                                            type={props.category}
                                            overview={item.overview}
                                            addFavourite={props.addFavourite}
                                            isFavourite={props.isFavourite}
                                            removeFavourite={props.removeFavourite}
                                            trailer={props.trailer}
                                            fetchTrailer={props.fetchTrailer}
                                            />
                                            :
                                            <CardFilm style={{ width: '100%', height: '100%' }}
                                            key={item.id}
                                            id={item.id}
                                            title={item.name}
                                            img={item.poster_path ? 
                                                "https://image.tmdb.org/t/p/original" + item.poster_path : require("../images/test-foto.jpg")}
                                            year={item.release_date ? 
                                                item.release_date.substring(0, 4) : ""}
                                            overview={item.overview}
                                            type={props.category}
                                            addFavourite={props.addFavourite}
                                            isFavourite={props.isFavourite}
                                            removeFavourite={props.removeFavourite}
                                            trailer={props.trailer}
                                            fetchTrailer={props.fetchTrailer} 
                                            />
                                    }
                                </Col>
                                :
                                <Col className="d-flex flex-column align-items-center mb-3" key={index}>
                                    {item.name}
                                    {
                                        item.poster_path ?
                                            <CardFilm style={{ width: '100%', height: '100%' }}
                                            key={item.id}
                                            id={item.id}
                                            title={item.name}
                                            img={item.poster_path ? "https://image.tmdb.org/t/p/original" + item.poster_path : require("../images/test-foto.jpg")}
                                            year={item.release_date ? item.release_date.substring(0, 4) : ""}
                                            overview={item.overview}
                                            type={props.category}
                                            addFavourite={props.addFavourite}
                                            isFavourite={props.isFavourite}
                                            removeFavourite={props.removeFavourite}
                                            trailer={props.trailer}
                                            fetchTrailer={props.fetchTrailer}
                                            />
                                            :
                                            <CardFilm style={{ width: '100%', height: '100%' }}
                                                key={item.id}
                                                id={item.id}
                                                title={item.name}
                                                img={require("../images/test-foto.jpg")}
                                                year={item.release_date ? item.release_date.substring(0, 4) : ""}
                                                overview={item.overview}
                                                type={props.category}
                                                addFavourite={props.addFavourite}
                                                isFavourite={props.isFavourite}
                                                removeFavourite={props.removeFavourite}
                                                trailer={props.trailer}
                                                fetchTrailer={props.fetchTrailer}
                                            />
                                    }
                                </Col>

                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default CercaFilm;
