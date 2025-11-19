import axios from "axios";
import { BangDiem } from "../../domain/models/BangDiem";

export default class BangDiemRepository {
  async layBangDiemTheoSinhVien(maSinhVien) {
    try {
      const res = await axios.get(
        `http://103.149.170.20:3000/api/v1/chuongTrinhHocBangDiem/${maSinhVien}`
      );
      return res.data.map(
        (item) =>
          new BangDiem(
            item.id,
            item.maHocPhan,
            item.tenHocPhan,
            item.maGiangVien,
            item.soTinChi,
            item.tienQuyet
          )
      );
    } catch (err) {
      console.error("Lỗi khi lấy bảng điểm:", err);
      return [];
    }
  }
}
