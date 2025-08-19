class ProductControllers {
    async show(req, res) {

        // const catalogModel = await getCatalogModel();
        //
        // res.render('client/single-product/single-product', {
        //     title: 'Товар',
        //     active: '',
        //     model: {
        //         catalog: catalogModel,
        //         productCard
        //     }
        // });

        res.send('ok');
    }
}

export default new ProductControllers();