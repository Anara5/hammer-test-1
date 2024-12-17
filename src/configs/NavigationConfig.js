import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  SettingOutlined,
  MobileOutlined,
  ShopOutlined,
  TeamOutlined,
  MailOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const appsNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'main',
    breadcrumb: false,
    submenu: [
      {
        key: 'main-dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: 'dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-catalog-products',
            path: `${APP_PREFIX_PATH}/main/catalog/products`,
            title: 'products',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'categories',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'collections',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'combo',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main-orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'orders',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-customers',
        path: `${APP_PREFIX_PATH}/main/customers`,
        title: 'customers',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-customers-customer-list',
            path: `${APP_PREFIX_PATH}/main/customers/customer-list`,
            title: 'customer list',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-customers-customer-groups',
            path: `${APP_PREFIX_PATH}/main/customers/customer-groups`,
            title: 'customer groups',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main-banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-promocodes',
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: 'promocodes',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-offline-shops',
        path: `${APP_PREFIX_PATH}/main/offline-shops`,
        title: 'offline shops',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-offline-shops-adresses',
            path: `${APP_PREFIX_PATH}/main/offline-shops/adresses`,
            title: 'adresses',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-offline-shops-geolofences',
            path: `${APP_PREFIX_PATH}/main/offline-shops/geofences`,
            title: 'geofences',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main-employees',
        path: `${APP_PREFIX_PATH}/main/employees`,
        title: 'employees',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-mailings',
        path: `${APP_PREFIX_PATH}/main/mailings`,
        title: 'mailings',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  },
  {
    key: 'systems',
    path: `${APP_PREFIX_PATH}/systems`,
    title: 'systems',
    breadcrumb: false,
    submenu: [
      {
        key: 'systems-settings',
        path: `${APP_PREFIX_PATH}/systems/settings`,
        title: 'settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'systems-mobile-app',
        path: `${APP_PREFIX_PATH}/systems/mobile-app`,
        title: 'mobile app',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'systems-logs',
        path: `${APP_PREFIX_PATH}/systems/logs`,
        title: 'logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
];

const navigationConfig = [
  ...appsNavTree
];

export default navigationConfig;
