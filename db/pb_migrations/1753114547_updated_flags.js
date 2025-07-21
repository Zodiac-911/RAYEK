/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225681745")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.giver = @request.auth.id",
    "deleteRule": "@request.auth.id = @collection.flags.giver",
    "indexes": [
      "CREATE UNIQUE INDEX `idx_TPKpYu9A1T` ON `flags` (\n  `giver`,\n  `post`,\n  `receiver`\n)"
    ],
    "listRule": "",
    "updateRule": "@request.auth.id = @collection.flags.giver",
    "viewRule": ""
  }, collection)

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool3499814433",
    "name": "green",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225681745")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "indexes": [],
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("bool3499814433")

  return app.save(collection)
})
