/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1125843985")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3800384991",
    "maxSelect": 1,
    "maxSize": 5242880,
    "mimeTypes": [],
    "name": "post_img",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [
      "1080x1080"
    ],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1125843985")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3800384991",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "post_img",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
