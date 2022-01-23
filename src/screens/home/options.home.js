import MoneyIcon from '../../global/icons/Money3.svg';
import PesticideIcon from '../../global/icons/Pesticide.svg';
import ExchangeIcon from '../../global/icons/Exchange2.svg';
import QRCodeIcon from '../../global/icons/QR Code.svg';
import ShoppingBasketIcon from '../../global/icons/Shopping Basket.svg';
import BrainstormIcon from '../../global/icons/Brainstorm.svg';
import OrderIcon from '../../global/icons/Order.svg';
import WarehouseIcon from '../../global/icons/Warehouse.svg';
import CartIcon from '../../global/icons/Cart.svg';
import DroneIcon from '../../global/icons/Drone.svg';
import CabbageIcon from '../../global/icons/Cabbage.svg';
import ReadingIcon from '../../global/icons/Reading.svg';
import MarketIcon from '../../global/icons/Market.svg';
import COLOR from '../../global/styles/color.style';

const partner_business = {
  title: 'Đối tác - Kinh doanh',
  bg: COLOR.LIGHT_YELLOW,
  options: [
    {
      id: 'Money',
      title: 'Thống kê',
      icon: MoneyIcon,
      navigator: 'Money',
    },
    {
      id: 'Order',
      title: 'Đơn hàng',
      icon: OrderIcon,
      navigator: 'Order',
    },
    {
      id: 'Partner',
      title: 'Đối tác',
      icon: BrainstormIcon,
      navigator: 'Partner',
    },
  ],
};

const product_service = {
  title: 'Sản phẩm - Dịch vụ',
  bg: COLOR.LIGHTER_BLUE,
  options: [
    {
      id: 'Warehouse',
      title: 'Kho hàng',
      icon: WarehouseIcon,
      navigator: 'Warehouse',
    },
    {
      id: 'ImportGoods',
      title: 'Nhập hàng',
      icon: CartIcon,
      navigator: 'ImportGoods',
    },
    {
      id: 'QRCode',
      title: 'Quét QR thuốc BVTV',
      icon: QRCodeIcon,
      navigator: 'QRCode',
    },
    {
      id: 'harvest',
      title: 'Thuê\ndịch vụ',
      icon: DroneIcon,
      navigator: 'harvest',
    },
  ],
};

const useful_information = {
  title: 'Thông tin bổ ích',
  bg: COLOR.LIGHTER_SUCCESS,
  options: [
    {
      id: 'plant',
      title: 'Cây trồng',
      icon: CabbageIcon,
      navigator: 'Plant',
    },
    {
      id: 'Market',
      title: 'Thị trường',
      icon: MarketIcon,
      navigator: 'Market',
    },
    {
      id: 'Book',
      title: 'Cẩm nang',
      icon: ReadingIcon,
      navigator: 'Book',
    },
    {
      id: 'Promotion',
      title: 'Chương trình khuyến mãi',
      icon: WarehouseIcon,
      navigator: 'Promotion',
    },
  ],
};
export { partner_business, product_service, useful_information };
