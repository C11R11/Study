import albumModel from "../models/albumModel";

const albumModelImpl = new albumModel();

async function GetAllAlbums(req, res) {
  try {
    const albums = await albumModelImpl.GetAllAlbums();
    res.status(200).json({
      status: "success",
      results: albums.length,
      data: albums,
    });
  } catch (err) {
    console.log("GetAllAlbums--as", err)
    res.status(404).json({ status: "fail", message: err });
  }
}

async function GetAlbum(req, res) {
  try {
    const album = await albumModelImpl.GetAlbum(req.params.id);
    res.status(200).json({
      status: "success",
      data: album,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
}

const UpdateAlbum = async (req, res) => {
  try {
    const result = await albumModelImpl.UpdateAlbum(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

const CreatAlbum = async (req, res) => {
  try {
    console.log("Controller, create album->", req.body);

    const newAlbum = await albumModelImpl.CreateAlbum(req.body);
    console.log("after new album");

    res.status(201).json({
      status: "success",
      data: newAlbum,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

const DeleteAlbum = async (req, res) => {
  try {
    const result = await albumModelImpl.DeleteAlbum(req.params.id);
    res.status(200).json({
      status: "Ok",
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

const exp = { GetAllAlbums, DeleteAlbum, CreatAlbum, GetAlbum, UpdateAlbum };
export default exp;
