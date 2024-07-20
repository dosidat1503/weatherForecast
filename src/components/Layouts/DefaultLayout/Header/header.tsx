
import './header.scss'

export default function Header(){
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 bg-primary">
                        <h1 className="text-light header-text">Weather Dashboard</h1>
                    </div>
                    {/* <div className="header-logo col-sm-12 col-md-6 col-lg-4">
                        <img 
                            src={images.header_logo} 
                            alt="logo dosi-in" 
                            // type="link" 
                            // onClick={handleClickLogo}
                        />
                    </div>  */}
                </div>
            </div>
        </header>
    )
}