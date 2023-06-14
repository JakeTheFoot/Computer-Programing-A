migrate((db) => {
  const collection = new Collection({
    "id": "b4ipnmiu708mca3",
    "created": "2023-06-14 15:05:14.509Z",
    "updated": "2023-06-14 15:05:14.509Z",
    "name": "Posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yw4t8ape",
        "name": "Title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b4ipnmiu708mca3");

  return dao.deleteCollection(collection);
})
