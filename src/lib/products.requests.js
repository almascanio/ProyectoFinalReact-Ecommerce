const wood = [
    { 
        id: 1, 
        title: "Mueble 1", 
        price: 676,
        img: "https://i.pinimg.com/564x/e4/9c/5b/e49c5b5e78d360735b279150676eeb9c.jpg", 
        stock: 10,
    }, 
    { 
        id: 2, 
        title: "Mueble 2", 
        price: 828,
        img: "https://i.pinimg.com/564x/51/f0/6e/51f06e9f69db9e14aebbace26d975fd8.jpg", 
        stock: 10,
    },
    { 
        id: 3, 
        title: "Mueble 3", 
        price: 827,
        img: "https://i.pinimg.com/564x/e3/9d/36/e39d36640f81219ae7fad3148558b4ca.jpg", 
        stock: 10,
    },
];

export const productsMuebles = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(wood)
        }, 2000)
    });
};

export const productsMueble = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(wood[0])
        }, 1000)
    });
};