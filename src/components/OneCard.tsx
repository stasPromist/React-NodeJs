import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../services/apiService";
import Title from "./Title";
export interface ICardData {

    title: string,
    subTitle: string,
    description: string,
    address: string,
    phone: string,
    bizNumber: string,
    image: {
        url: string,
        alt: string
    }
    url: string
};

function OneCard() {
    const [title, setTitle] = useState<string>('');
    const [subTitle, setSubTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const { id } = useParams();
    useEffect(() => {
        const res = getRequest(`cards/${id}`);
        if (!res) return;
        res.then(res => res.json())
            .then(json => {
                if (json.ok === false) {
                    setError('error get the data');
                    return;
                }

                setTitle(json.title);
                setSubTitle(json.subTitle);
                setDescription(json.description);
                setAddress(json.address);
                setPhone(json.phone);
                setImage(json.image.url);

            })
    }, [id]);

    return (
        <>
            <Title
                main="Card details"
                sub="Here you will find business card description"
            />

            <div className="card mb-3 m-5 pb-5 w-50 d-flex flex-column min-vh-50 min-vw-50">
                <div className="col">
                    <div className="card h-100">
                        <img src={image} className="card-img-top" alt='' />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{subTitle}</p>
                            <p className="card-text">{description}</p>
                            <p className="card-text">{address}</p>
                            <p className="card-text">{phone}</p>
                            {/* <p className="card-text">{bizNumber}</p> */}
                            {/* <p className="card-text">{card.image.url}</p> */}
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <Link
                        to="/cardslist"
                    >
                        <button

                            className="btn btn-info mt-2"
                        >
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default OneCard;