import './Cards.scss';

const Cards = ({ src, title, price, onLoad }) => {
    return (
        <article>
            <img className='card__imagen' src={src} onLoad={onLoad} />
            <h4 className='card__titulo'>{title}</h4>
            <p className='card__precio'>${price}</p>
        </article>
    )
}

export default Cards

