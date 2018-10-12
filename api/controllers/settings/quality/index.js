module.exports = {

    friendlyName: 'View quality settings',

    description: '',

    exits: {
        success: {
            viewTemplatePath: 'pages/settings/quality/index',
        }

    },

    fn: async function (inputs, exits) {

        let res = this.res;
        let req = this.req;
        let query = req.query;

        if (req.wantsJSON) {

            const columns = ['id', 'name', 'title'];

            let quality = await Quality.find({
                title: { contains: query.search.value },
                name: { contains: query.search.value },
            }).sort(`${columns[query.order[0].column]} ${query.order[0].dir}`);

            quality = quality.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    title: item.title,
                    movies: {
                        '90Min': { min: item.minSizeMovie90Min, max: item.maxSizeMovie90Min },
                        '140Min': { min: item.minSizeMovie140Min, max: item.maxSizeMovie140Min },
                    },
                    series: {
                        '30Min': { min: item.minSizeSerie30Min, max: item.maxSizeSerie30Min },
                        '60Min': { min: item.minSizeSerie60Min, max: item.maxSizeSerie60Min },
                    },
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                };
            });

            return res.ok({
                'data': quality,
                'recordsTotal': await Quality.count(),
                'recordsFiltered': quality.length
            });
        } else {
            const quality = await Quality.find();
            return exits.success({ 'quality': quality });
        }

    }


};
