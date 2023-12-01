import './Cards.scss';

const Cards = ({ src, title, price }) => {
    return (
        <article>
            <img className='card__imagen' src={src} />
            <h4 className='card__titulo'>{title}</h4>
            <p className='card__precio'>${price}</p>
        </article>
    )
}

export default Cards