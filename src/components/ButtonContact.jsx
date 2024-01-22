import { BsWhatsapp } from "react-icons/bs";

function ButtonContact() {
  return (
    <a 
      className="buttonContact"
      href="https://api.whatsapp.com/send?phone=573003065178" target="_black"
      style={{
        position: 'fixed', 
        bottom: '20px', 
        right: '40px', 
        backgroundColor: '#6cfb5f', 
        color: 'white', 
        borderRadius: '50%', 
        padding: '10px', 
        cursor: 'pointer', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <BsWhatsapp size={30} />
    </a>
  );
}

export default ButtonContact;