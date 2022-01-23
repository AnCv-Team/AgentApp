import COLOR from '../../global/styles/color.style';

const Fertilizer_IG = require('../../global/images/importGoods/Fertilizer_IG.png');
const Pesticides_IG = require('../../global/images/importGoods/Pesticides_IG.png');
const Drone_IG = require('../../global/images/importGoods/Drone_IG.png');

const options = [
  {
    id: '1',
    colorDot: COLOR.SUCCESS,
    background: COLOR.LIGHTER_SUCCESS,
    title: 'Phân bón',
    more: 'Xuất xứ chính hãng, hiệu quả',
    news: '4 sản phẩm mới',
    iconNews: 'add-circle-outline',
    img: Fertilizer_IG,
    navigate: 'ImportGoodsProducts',
  },
  {
    id: '1',
    colorDot: COLOR.SUCCESS,
    background: COLOR.LIGHTER_SUCCESS,
    title: 'Phân bón',
    more: 'Xuất xứ chính hãng, hiệu quả',
    news: '4 sản phẩm mới',
    iconNews: 'add-circle-outline',
    img: Fertilizer_IG,
    navigate: 'ImportGoodsProducts',
  },
  {
    id: '2',
    colorDot: COLOR.YELLOW,
    background: COLOR.LIGHT_YELLOW,
    title: 'Thuốc trừ sâu',
    more: 'Xuất xứ chính hãng, hiệu quả',
    news: 'Chương trình giảm giá',
    iconNews: 'hourglass-outline',
    img: Pesticides_IG,
    navigate: 'ImportGoodsProducts',
  },
  {
    id: '3',
    colorDot: COLOR.BLUE,
    background: COLOR.LIGHTER_BLUE,
    title: 'Dịch vụ nông nghiệp',
    more: 'Nhanh - rẻ - tiện lợi',
    news: 'Đối tác mới',
    iconNews: 'person-circle-outline',
    img: Drone_IG,
    navigate: 'ImportGoodsProducts',
  },
];

export default options;
