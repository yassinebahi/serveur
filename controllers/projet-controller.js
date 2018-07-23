const Projet = require('../models/projets');


module.exports = {
    
    readAll (req,res) {
        Projet.find().then((projets) => {
             res.send(projets);
        });
    },
    read (req,res) {
         
        const id = req.params.id;
        Projet.findById({_id:id}).then( (projet) => {
             res.send({projet});
        })
       
    },
    async create(req,res){
        const rlt = [];
        for (var i=0; i<req.body.reports.length; i++) {
            var element = req.body.reports[i];
            const control = element.control;
            const plateform = element.plateform;
            const network = element.network;
            const traffic = element.traffic;
            const projet = new Projet({ control, plateform, network, traffic });
            try {
                await projet.save();
                console.log(i, 'th projet is created!');
            } catch (err) {

            }
        }
        res.send({ 
            "ok": true,
            samplePeriod: 30,
            reportBundleSize: 100
        });
        // try{
        //     console.log('~~~~~~ data from client side ~~~~~~~~');
        //     console.log(req.body);
        //     const rlt = await Projet.create(req.body);
        //     res.send({ reports: rlt });
        // } catch (err) {
        //     res.status(400).send({err})
        // }
        
        
    },
        
    delete(req,res){
         const id = req.body.id;
         Projet.findByIdAndRemove({_id:id}).then( (projet) =>{
             res.send({projet});
         }); 
    },

    
};
