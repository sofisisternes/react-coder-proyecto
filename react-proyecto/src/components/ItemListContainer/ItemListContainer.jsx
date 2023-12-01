import './ItemListContainer.scss'

const ItemListContainer = ({ greeting }) => {

    return (
        <main>
            <div>
                <h1 className="text-3xl text-center m-4">TIENDA</h1>
                <p className="text-xl text-center text-black">
                    {greeting}
                </p>
            </div>
            <section>
                <article>
                </article>
            </section>
        </main>
    )
}
export default ItemListContainer