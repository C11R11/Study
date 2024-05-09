const request = require("supertest");

const app = require("../src/app").app;

describe("Health checks", () => {
  test("GET /api/v2/status => status", () => {
    return request(app)
      .get("/api/v2/status")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Album cycle", () => {

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
    tracks: ["Supertest", "patached"]   ,
    label: "Supertest",
    selling_information: {
      certifications: "No info",
      sales: "No info",
    },
    singles: ["Supertest"],
  };

  test("Adding a fake one", async () => {
    const response = await request(app)
      .post("/api/v2/albums/")
      .send(fake_album)
      .set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/application\/json/);
    expect(response.status).toBe(201);
    id_new = response.body.data.id;
  });

  test("Checking the new album data", () => {
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

  test("Modify the new album data", () => {
    return request(app)
      .patch("/api/v2/albums/" + id_new)
      .set("Accept", "application/json")
      .send({ title: "SupePatachedrtest!",   })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const expected = Object.assign({ id: id_new }, fake_patched_album);
        console.log("response.body.data-->", response.body.data);
        expect(response.body.data).toEqual(expected);
      });
  });

});
