import './ItemListContainer.scss'
import Cards from '../Cards/Cards'

const ItemListContainer = ({ greeting }) => {

    return (
        <main>
            <div>
                <h1 className="text-3xl text-center m-4">TIENDA</h1>
                <p className="text-xl text-center text-black m-2 fixed-element">
                    {greeting}
                </p>
            </div>
            <section className='tienda'>
                <article  className='cards'> 
                    <Cards src={"/img/vestido.jpeg"} title={"Vestido"} price={1200} />
                </article>
                <article className='cards'>
                    <Cards src={"/img/blazer.jpeg"} title={"Blazer"} price={1800} />
                </article>
                <article className='cards'>
                    <Cards src={"/img/conjunto.jpeg"} title={"Conjunto tejido"} price={2200} />
                </article>
                <article className='cards'>
                    <Cards src={"/img/musculosa.jpeg"} title={"Musculosa"} price={600} />
                </article>
                <article className='cards'>
                    <Cards src={"/img/pollera.jpeg"} title={"Mini Jean"} price={1500} />
                </article>
                <article className='cards'>
                    <Cards src={"/img/remera.jpeg"} title={"Remera"} price={900} />
                </article>
                <article className='cards'>
                    <Cards src={"/img/remeron.jpeg"} title={"Remeron"} price={1300} />
                </article>
                <article className='cards'>
                    <Cards src={"/img/short.jpeg"} title={"Short Jean"} price={1100} />
                </article>
                <article className='cards'>
                    <Cards src={"/img/top.jpeg"} title={"Top"} price={800} />
                </article>
            </section>
        </main>
    )
}
export default ItemListContainer