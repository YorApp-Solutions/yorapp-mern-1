let router = require('express').Router()

//Set defualt API response

router.get('/',(req,res)=>{
  res.json({
    status:"API Its Working",
    message:"Welcome to RESTHub Craafted with love!"
  })
})

//Import Contact Controller
let contactController = require('./contactController')

//Contact Routes
router.route('/contacts')
  .get(contactController.index)
  .post(contactController.new)

  router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete)

//exports API routes
module.exports=router
