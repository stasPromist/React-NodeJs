import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../App";
import { ICardData } from "../pages/CardsList";
import { getRequest, patchRequest } from "../services/apiService";



function AllCardsList() {
    const context = useContext(AppContext);
    const isLoggedIn = context !== null && context.userName.length > 0;
    const [cards, setCards] = useState<Array<ICardData>>([]);
    const navigate = useNavigate();


    function getCards() {

        const res = getRequest(`cardsAll`);
        console.log()

        if (!res) return;
        res.then(response => response.json())
            .then(json => {
                console.log(json)
                if (json.error) {
                    toast.error(json.error,
                        {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    return;
                }

                setCards(json);
            })
    }
    useEffect(getCards, []);

   
    function moveTo(card: ICardData) {

        const res = patchRequest(
            `users/favCards/${card._id}`,
            { ...card, currentId: context?.userName }

        );
        if (!res) return;

        res.then(response => response.json())
            .then(json => {

                navigate('/myFavorCards');
            })
    }


    return (
        <>
            {

                cards.map(card =>
                    <div key={card._id}>
                        <div className="mb-5 shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={card.image.url} className="card-img-top" alt={card.image.alt} />
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.subTitle}</p>
                                        <p className="card-text">{card.address}</p>
                                        <p className="card-text">{card.phone}</p>
                                        <p className="card-text">{card.bizNumber}</p>
                                    </div>
                                    {
                                        isLoggedIn &&
                                        <Link
                                            onClick={() => moveTo(card)}
                                            to={`/myFavorCards`}

                                        >

                                            <i className="bi bi-cloud-upload-fill"></i>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default AllCardsList;