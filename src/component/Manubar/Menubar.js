import './Menubar.css'


const Menubar = (props) => {

    return (
        <div>
            <div className="container">
                <div>
                    <div className="row ">
                        <div className="col-md-2 p-3">LOGO</div>
                        <div className="col-md-10 menu-container d-flex justify-content-end ">
                            <li className='p-3'>Home</li>
                            <li className='p-3'>Content</li>
                            <li className='p-3'> Cart <sup>{props.count}</sup> </li>
                            <li className='p-3'>About</li>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Menubar;