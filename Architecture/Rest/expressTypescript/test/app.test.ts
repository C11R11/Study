//import fs from "fs";

let originalData;

beforeAll(() => {
 // originalData = JSON.parse(fs.readFileSync("data/albums.json").toString());
});
afterAll(() => console.log("After all stuff"));

const request = require("supertest");
const app = require("../src/app").app;

describe("Health checks", () => {
  test("GET /api/v2/status => status", () => {
    return request(app)
      .get("/api/v2/status")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("GET the original data before CRUD operations", () => {
    return request(app)
      .get("/api/v2/albums/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        originalData = response.body.data;
      });
  });
});

describe("Album CRUD", () => {
  let id_new: string;
  let fake_album = {
    title: "Supertest!",
    artist: "Supertest",
    genre: "Supertest",
    year: 2024,
    tracks: ["Supertest"],
    label: "Supertest",
    selling_information: {
      certifications: "No info",
      sales: "No info",
    },
    singles: ["Supertest"],
  };

  let fake_patched_album = {
    title: "SupePatachedrtest!",
    artist: "Supertest",
    genre: "Supertest",
    year: 2024,
    tracks: ["Supertest", "patached"],
    label: "Supertest",
    selling_information: {
      certifications: "No info",
      sales: "No info",
    },
    singles: ["Supertest"],
  };

  test("POST a fake one", async () => {
    const response = await request(app)
      .post("/api/v2/albums/")
      .send(fake_album)
      .set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/application\/json/);
    expect(response.status).toBe(201);
    id_new = response.body.data.id;
  });

  test("GET the new album data", () => {
    return request(app)
      .get("/api/v2/albums/" + id_new)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const expected = Object.assign({ id: id_new }, fake_album);
        expect(response.body.data).toEqual(expected);
      });
  });

    test("Get invalid album", () => {
      return request(app)
        .get("/api/v2/albums/" + -1)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404)
    });

    test("PATCH invalid id", () => {
      return request(app)
        .patch("/api/v2/albums/" + -1)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404)
    });

  test("PATCH the new album data", () => {
    return request(app)
      .patch("/api/v2/albums/" + id_new)
      .set("Accept", "application/json")
      .send({ title: "SupePatachedrtest!", tracks: ["Supertest", "patached"] })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const expected = Object.assign({ id: id_new }, fake_patched_album);
        console.log("response.body.data-->", response.body.data);
        expect(response.body.data).toEqual(expected);
      });
  });

  test("DELETE the new album data", () => {
    return request(app)
      .delete("/api/v2/albums/" + id_new)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("DELETE no valid id", () => {
    return request(app)
      .delete("/api/v2/albums/" + -1)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404);
  });

  test("GET all the data is back from original", () => {
    return request(app)
      .get("/api/v2/albums/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(originalData);
      });
  });
});
