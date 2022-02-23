import React, {useState, useEffect} from 'react'
import {db, auth } from '../config/Firebase'

function Subscribe() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        db.collection('products').where('active','==', true).get().then(snapshot => {
            const products = {}
            snapshot.forEach(async productDoc =>{
                products[productDoc.id] = productDoc.data()
                const priceSnapshot = await productDoc.ref.collection('prices').get();
                priceSnapshot.forEach(priceDoc=>{
                    products[productDoc.id].prices = {
                        priceId: priceDoc.id,
                        priceData: priceDoc.data()
                    }
                }) 
            })
            console.log('products', products)
            setProducts(products) 
        })

    }, [])

    return (
        <div>
            Hello World
        </div>
    )
}

export default Subscribe
