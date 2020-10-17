// function Welcome(props) {
//     const [state, setState] = React.useState(true);
//     const [s, setS] = React.useState(false);
//     return (
//         <div>
//             <h1 onClick={() => setState(!state)}>{props.txt}</h1>
//             <p onClick={() => setS(!s)}>{state ? "LoL" : "Fuck"}</p>
//             {props.isActive ? <h2>Yes, I'm active</h2> : false}

//             {s ? (
//                 <a style={{ color: "inherit" }} href="#">
//                     ksdkff
//                 </a>
//             ) : (
//                 false
//             )}

//             {props.sS ? <h3>SSSSSS</h3> : false}
//         </div>
//     );
// }

// function Text(props) {
//     return (
//         <div style={{ backgroundColor: props.hasColor ? "red" : "white" }}>
//             <h1 onClick={props.click}>Okey, i'm fine</h1>
//         </div>
//     );
// }

function Product(props) {
    return (
        <div className="product-wrapper">
            <div className="product">
                <div className="product-img">
                    <img src={props.img} alt={props.alt} />
                </div>
                <div className="product-info">
                    <h3 className="product-name">{props.name}</h3>
                    <p className="product-price">{props.price}</p>
                </div>
            </div>
        </div>
    );
}

function App() {
    const products = [
        {
            img:
                "https://quatangme.com/upload/images/he-lo-top-10-girl-xinh-van-nguoi-me.jpg",
            alt: "Girl xinh xinh",
            name: "Hot girl Cầu Giấy",
            price: 300000,
            active: true,
        },
        {
            img:
                "https://quatangme.com/upload/images/he-lo-top-10-girl-xinh-van-nguoi-me.jpg",
            alt: "Girl xinh xinh",
            name: "Hot girl Bưởi",
            price: 600000,
            active: false,
        },
        {
            img:
                "https://quatangme.com/upload/images/he-lo-top-10-girl-xinh-van-nguoi-me.jpg",
            alt: "Girl xinh xinh",
            name: "Hot girl Nguyễn Khánh Toàn",
            price: 1000000,
            active: false,
        },
        {
            img:
                "https://quatangme.com/upload/images/he-lo-top-10-girl-xinh-van-nguoi-me.jpg",
            alt: "Girl xinh xinh",
            name: "Hot girl Trần Duy Hưng",
            price: 1200000,
            active: true,
        },
    ];

    const [view, setView] = React.useState(0);
    const [sort, setSort] = React.useState(1);
    console.log(sort);
    return (
        <React.Fragment>
            <select name="" id="" onChange={(e) => setView(+e.target.value)}>
                <option value="0">Toàn bộ</option>
                <option value="1">Đang hoạt động</option>
                <option value="2">Đang tạm nghỉ</option>
            </select>

            <select name="" id="" onChange={(e) => setSort(+e.target.value)}>
                <option value="1">Tăng dần</option>
                <option value="2">Giảm dần</option>
            </select>

            <div className="product-list">
                {products
                    .filter((i) =>
                        view == 0
                            ? i
                            : view == 1
                            ? i.active == true
                            : i.active == false
                    )
                    .sort(({ price: priceA }, { price: priceB }) =>
                        sort == 1 ? priceA - priceB : priceB - priceA
                    )
                    .map(({ img, alt, name, price }) => (
                        <Product
                            img={img}
                            alt={alt}
                            name={name}
                            price={price}
                        />
                    ))}
            </div>
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
