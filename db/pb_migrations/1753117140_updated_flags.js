/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225681745")

  // update collection data
  unmarshal({
    "deleteRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225681745")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = @collection.flags.giver"
  }, collection)

  return app.save(collection)
})
