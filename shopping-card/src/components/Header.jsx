import CardIcon from "./CardIcon"

function Header({ cart }) {
    return (
        <div className='flex justify-between items-center mb-6'>
            <h1 className="text-3xl font-semibold">React ve Tailwind CSS Sepet Uygulaması</h1>
            <CardIcon cart={cart} />
        </div>
    )
}

export default Header