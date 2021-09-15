import './Button.css'

const Buttons = () => {
    return (
        <div className="buttons">
            <button className = "escrow" >Create Escrow</button>
            <button className="wallet" >
                Connect Wallet <i class="fa fa-google-wallet icon-wallet" aria-hidden="true"></i>
            </button>
        </div>
     );
}
 
export default Buttons;