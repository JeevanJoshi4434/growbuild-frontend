import React from "react";
import * as Icon from "react-feather";

const horizontalMenuConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={16} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    id: "apps",
    // title: "Apps",
    type: "dropdown",
    icon: <Icon.Grid size={16} />,
    children: [
      // {
      //   id: "allDev",
      //   title: "View Developers",
      //   type: "item",
      //   icon: <Icon.Users size={16} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/developers/all",
      // },
      {
        id: "CreateDev",
        title: "Developers",
        type: "item",
        icon: <Icon.UserPlus size={16} />,
        permissions: ["admin", "editor"],
        navLink: "/developers",
      },

      // {
      //   id: "allProject",
      //   title: "View Project",
      //   type: "item",
      //   icon: <Icon.Layout size={16} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/projects/all",
      // },
      {
        id: "Create Project",
        title: "Projects",
        type: "item",
        icon: <Icon.Layout size={16} />,
        permissions: ["admin", "editor"],
        navLink: "/projects",
      },

      {
        id: "CreateBlock",
        title: "Buildings",
        type: "item",
        icon: <Icon.Grid size={16} />,
        permissions: ["admin", "editor"],
        navLink: "/block/create",
      },
      // {
      //   id: "allBlock",
      //   title: "View Blocks",
      //   type: "item",
      //   icon: <Icon.Grid size={16} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/block/all",
      // },

      // {
      //   id: "CreateParking",
      //   title: "Create Parking",
      //   type: "item",
      //   icon: <Icon.Plus size={16} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/parking/create",
      // },
      {
        id: "allParking",
        title: "Parkings",
        type: "item",
        icon: <Icon.Navigation size={16} />,
        permissions: ["admin", "editor"],
        navLink: "/parking/create",
      },

      {
        id: "CreateUnits",
        title: "Units",
        type: "item",
        icon: <Icon.Archive size={16} />,
        permissions: ["admin", "editor"],
        navLink: "/unit/create",
      },
      // {
      //   id: "allUnits",
      //   title: "View Units",
      //   type: "item",
      //   icon: <Icon.Archive size={16} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/unit/all",
      // },

      {
        id: "CreateFlat",
        title: "Unit Details",
        type: "item",
        icon: <Icon.Menu size={16} />,
        permissions: ["admin", "editor"],
        navLink: "/flat/create",
      },
      // {
      //   id: "allFlat",
      //   title: "View Flats",
      //   type: "item",
      //   icon: <Icon.Menu size={16} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/flat/all",
      // },

      {
        id: "Bookings",
        title: "Bookings",
        type: "item",
        icon: <Icon.FileText size={16} />,
        permissions: ["admin", "editor"],
        navLink: "/booking/create",
      },
      {
        id: "bookingStatus",
        title: "Booking Status",
        type: "item",
        icon: <Icon.Clock size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/booking-status/view",
      },
      // {
      //   id: "CreateBookings",
      //   title: "Bookings",
      //   type: "item",
      //   icon: <Icon.FileText size={16} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/booking/all",
      // },
      {
        id: "createNewStage",
        title: "Demands",
        type: "item",
        icon: <Icon.BarChart size={16} />,
        permissions: ["admin", "editor"],
        navLink: "/deemand/create",
      },
      // {
      //   id: "All stages",
      //   title: "All Stages",
      //   type: "item",
      //   icon: <Icon.BarChart size={16} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/deemand/all",
      // },

      {
        id: "paymentMaster",
        title: "Payment Master",
        type: "item",
        icon: <Icon.CreditCard size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/buyer-master",
      },
      {
        id: "paymentStatus",
        title: "Payment Status",
        type: "item",
        icon: <Icon.Clock size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/payment/status",
      },
      {
        id: "paymentRecieve",
        title: "Payment Recieve",
        type: "item",
        icon: <Icon.CreditCard size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/payment/recieve",
      },
      // salesMonitoring tab -->
      // {
      //   id: "salesMonitor",
      //   title: "Sales Monitoring",
      //   type: "collapse",
      //   icon: <Icon.ShoppingCart size={20} />,
      //   children: [
      //     {
      //       id: "availablity",
      //       title: "Availablity",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/shop",
      //     },
      //     {
      //       id: "bookingStatus",
      //       title: "Booking Status",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/product-detail",
      //     },
      //     {
      //       id: "bookingDetails",
      //       title: "Booking Details",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/wishlist",
      //     },
      //     {
      //       id: "Cancellation",
      //       title: "Cancellation",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/checkout",
      //     },
      //     {
      //       id: "NameTransfer",
      //       title: "Name Transfer",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/checkout",
      //     },
      //     {
      //       id: "unitTReaport",
      //       title: "Unit Transfer Report",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/checkout",
      //     },
      //     {
      //       id: "BrokerPerformance",
      //       title: "Broker Performance",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/checkout",
      //     },
      //     {
      //       id: "NewBooking",
      //       title: "New Booking",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/checkout",
      //     },
      //     {
      //       id: "SchemeTransfer",
      //       title: "Scheme Transfer",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/checkout",
      //     },
      //     {
      //       id: "ProjectWiseOwnerStatus",
      //       title: "Project Wise \n Owner Status",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/ecommerce/checkout",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   id: "uiElements",
  //   title: "UI Elements",
  //   type: "dropdown",
  //   icon: <Icon.Layers size={16} />,
  //   children: [
  //     {
  //       id: "dataView",
  //       title: "Data List",
  //       type: "dropdown",
  //       icon: <Icon.List size={16} />,
  //       children: [
  //         {
  //           id: "listView",
  //           title: "List View",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/data-list/list-view"
  //         },
  //         {
  //           id: "thumbView",
  //           title: "Thumb View",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/data-list/thumb-view"
  //         }
  //       ]
  //     },
  //     {
  //       id: "content",
  //       title: "Content",
  //       type: "dropdown",
  //       icon: <Icon.Layout size={16} />,
  //       children: [
  //         {
  //           id: "gird",
  //           title: "Grid",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/ui-element/grid",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "typography",
  //           title: "Typography",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/ui-element/typography",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "textUitlities",
  //           title: "Text Utilities",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/ui-element/textutilities",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "syntaxHighlighter",
  //           title: "Syntax Highlighter",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/ui-element/syntaxhighlighter",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "colors",
  //       title: "Colors",
  //       type: "item",
  //       icon: <Icon.Droplet size={16} />,
  //       navLink: "/colors/colors",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "icons",
  //       title: "Icons",
  //       type: "item",
  //       icon: <Icon.Eye size={16} />,
  //       navLink: "/icons/reactfeather",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "cards",
  //       title: "Cards",
  //       type: "dropdown",
  //       icon: <Icon.CreditCard size={16} />,
  //       children: [
  //         {
  //           id: "basic",
  //           title: "Basic",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/cards/basic",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "statistics",
  //           title: "Statistics",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/cards/statistics",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "analytics",
  //           title: "Analytics",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/cards/analytics",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "cardActions",
  //           title: "Card Actions",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/cards/action",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "components",
  //       title: "Components",
  //       type: "dropdown",
  //       icon: <Icon.Briefcase size={16} />,
  //       children: [
  //         {
  //           id: "alerts",
  //           title: "Alerts",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/alerts",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "buttons",
  //           title: "Buttons",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/buttons",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "breadCrumbs",
  //           title: "Breadcrumbs",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/breadcrumbs",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "carousel",
  //           title: "Carousel",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/carousel",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "dropDowns",
  //           title: "Dropdowns",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/dropdowns",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "listGroup",
  //           title: "List Group",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/list-group",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "modals",
  //           title: "Modals",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/modals",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "pagination",
  //           title: "Pagination",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/pagination",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "navsComponent",
  //           title: "Navs Component",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/nav-component",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "navbar",
  //           title: "Navbar",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/navbar",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "tabsComponent",
  //           title: "Tabs Component",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/tabs-component",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "pillsComponent",
  //           title: "Pills Component",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/pills-component",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "tooltips",
  //           title: "Tooltips",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/tooltips",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "popovers",
  //           title: "Popovers",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/popovers",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "badges",
  //           title: "Badges",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/badges",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "pillBadges",
  //           title: "Pill Badges",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/pill-badges",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "progress",
  //           title: "Progress",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/progress",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "mediaObjects",
  //           title: "Media Objects",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/media-objects",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "spinners",
  //           title: "Spinners",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/spinners",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "toasts",
  //           title: "Toasts",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/components/toasts",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "extraComponents",
  //       title: "Extra Components",
  //       type: "dropdown",
  //       icon: <Icon.Box size={16} />,
  //       children: [
  //         {
  //           id: "autoComplete",
  //           title: "Auto Complete",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/extra-components/auto-complete",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "avatar",
  //           title: "Avatar",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/extra-components/avatar",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "chips",
  //           title: "Chips",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/extra-components/chips",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "divider",
  //           title: "Divider",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/extra-components/divider",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "extensions",
  //       title: "Extensions",
  //       type: "dropdown",
  //       icon: <Icon.PlusCircle size={16} />,
  //       children: [
  //         {
  //           id: "sweetAlertExt",
  //           title: "Sweet Alerts",
  //           icon: <Icon.AlertCircle size={16} />,
  //           type: "item",
  //           navLink: "/extensions/sweet-alert",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "toastrExt",
  //           title: "Toastr",
  //           icon: <Icon.Zap size={16} />,
  //           type: "item",
  //           navLink: "/extensions/toastr",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "rcSlider",
  //           title: "Rc Slider",
  //           icon: <Icon.Sliders size={16} />,
  //           type: "item",
  //           navLink: "/extensions/slider",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "fileUploader",
  //           title: "File Uploader",
  //           icon: <Icon.UploadCloud size={16} />,
  //           type: "item",
  //           navLink: "/extensions/file-uploader",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "wysiwygEditor",
  //           title: "Wysiwyg Editor",
  //           icon: <Icon.Edit size={16} />,
  //           type: "item",
  //           navLink: "/extensions/wysiwyg-editor",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "drag_&_drop",
  //           title: "Drag & Drop",
  //           icon: <Icon.Droplet size={16} />,
  //           type: "item",
  //           navLink: "/extensions/drag-and-drop",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "tour",
  //           title: "Tour",
  //           icon: <Icon.Info size={16} />,
  //           type: "item",
  //           navLink: "/extensions/tour",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "clipBoard",
  //           title: "Clipboard",
  //           icon: <Icon.Copy size={16} />,
  //           type: "item",
  //           navLink: "/extensions/clipboard",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "contextMenu",
  //           title: "Context Menu",
  //           icon: <Icon.Menu size={16} />,
  //           type: "item",
  //           navLink: "/extensions/context-menu",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "swiper",
  //           title: "Swiper",
  //           icon: <Icon.Smartphone size={16} />,
  //           type: "item",
  //           navLink: "/extensions/swiper",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "access-control",
  //           title: "Access Control",
  //           icon: <Icon.Lock size={20} />,
  //           type: "item",
  //           navLink: "/extensions/access-control",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "i18n",
  //           title: "I18n",
  //           icon: <Icon.Globe size={16} />,
  //           type: "item",
  //           navLink: "/extensions/i18n",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "treeView",
  //           title: "Tree",
  //           icon: <Icon.GitPullRequest size={16} />,
  //           type: "item",
  //           navLink: "/extensions/tree",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "extPagination",
  //           title: "Pagination",
  //           icon: <Icon.MoreHorizontal size={16} />,
  //           type: "item",
  //           navLink: "/extensions/pagination",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "extImport",
  //           title: "Import",
  //           icon: <Icon.DownloadCloud size={16} />,
  //           type: "item",
  //           navLink: "/extensions/import",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "extExport",
  //           title: "Export",
  //           icon: <Icon.UploadCloud size={16} />,
  //           type: "item",
  //           navLink: "/extensions/export",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "extExportSelected",
  //           title: "Export Selected",
  //           icon: <Icon.CheckSquare size={16} />,
  //           type: "item",
  //           navLink: "/extensions/export-selected",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: "forms-tables",
  //   title: "Forms & Tables",
  //   type: "dropdown",
  //   icon: <Icon.Edit3 size={16} />,
  //   children: [
  //     {
  //       id: "formElements",
  //       title: "Form Elements",
  //       type: "dropdown",
  //       icon: <Icon.Copy size={16} />,
  //       children: [
  //         {
  //           id: "select",
  //           title: "Select",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/select",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "switch",
  //           title: "Switch",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/switch",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "checkbox",
  //           title: "Checkbox",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/checkbox",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "radio",
  //           title: "Radio",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/radio",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "input",
  //           title: "Input",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/input",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "inputGroup",
  //           title: "Input Group",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/input-group",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "numberInput",
  //           title: "Number Input",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/number-input",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "textarea",
  //           title: "Textarea",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/textarea",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "date_&_timePicker",
  //           title: "Date & Time Picker",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/pickers",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "inputMask",
  //           title: "Input Mask",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/input-mask",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "formLayouts",
  //       title: "Form Layouts",
  //       type: "item",
  //       icon: <Icon.Box size={16} />,
  //       navLink: "/forms/layout/form-layout",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "wizard",
  //       title: "Form Wizard",
  //       type: "item",
  //       icon: <Icon.MoreHorizontal size={16} />,
  //       navLink: "/forms/wizard",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "formik",
  //       title: "Formik",
  //       type: "item",
  //       icon: <Icon.CheckCircle size={16} />,
  //       navLink: "/forms/formik",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "tables",
  //       title: "Tables",
  //       type: "dropdown",
  //       icon: <Icon.Server size={16} />,
  //       children: [
  //         {
  //           id: "tablesReactstrap",
  //           title: "Reactstrap Tables",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/tables/reactstrap",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "reactTables",
  //           title: "React Tables",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/tables/react-tables",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "aggrid",
  //           title: "agGrid Table",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/tables/agGrid",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "dataTable",
  //           title: "DataTables",
  //           type: "item",
  //           icon: <Icon.Circle size={12} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/tables/data-tables"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: "pages",
  //   title: "Pages",
  //   type: "dropdown",
  //   icon: <Icon.File size={16} />,
  //   children: [
  //     {
  //       id: "profile",
  //       title: "Profile",
  //       type: "item",
  //       icon: <Icon.User size={16} />,
  //       navLink: "/pages/profile",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "accountSettings",
  //       title: "Account Settings",
  //       type: "item",
  //       icon: <Icon.Settings size={16} />,
  //       navLink: "/pages/account-settings",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "faq",
  //       title: "FAQ",
  //       type: "item",
  //       icon: <Icon.HelpCircle size={16} />,
  //       navLink: "/pages/faq",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "knowledgeBase",
  //       title: "Knowledge Base",
  //       type: "item",
  //       icon: <Icon.Info size={16} />,
  //       navLink: "/pages/knowledge-base",
  //       permissions: ["admin", "editor"],
  //       parentOf: [
  //         "/pages/knowledge-base/category/questions",
  //         "/pages/knowledge-base/category"
  //       ]
  //     },
  //     {
  //       id: "search",
  //       title: "Search",
  //       type: "item",
  //       icon: <Icon.Search size={16} />,
  //       navLink: "/pages/search",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "invoice",
  //       title: "Invoice",
  //       type: "item",
  //       icon: <Icon.File size={16} />,
  //       navLink: "/pages/invoice",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "authentication",
  //       title: "Authentication",
  //       type: "dropdown",
  //       icon: <Icon.Unlock size={16} />,
  //       children: [
  //         {
  //           id: "login",
  //           title: "Login",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/login",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "register",
  //           title: "Register",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/register",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "forgotPassword",
  //           title: "Forgot Password",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/forgot-password",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "resetPassword",
  //           title: "Reset Password",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/reset-password",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "lockScreen",
  //           title: "Lock Screen",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/lock-screen",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "miscellaneous",
  //       title: "Miscellaneous",
  //       type: "dropdown",
  //       icon: <Icon.FileText size={16} />,
  //       children: [
  //         {
  //           id: "comingSoon",
  //           title: "Coming Soon",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/misc/coming-soon",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "error",
  //           title: "Error",
  //           type: "dropdown",
  //           icon: <Icon.Circle size={10} />,
  //           children: [
  //             {
  //               id: "404",
  //               title: "404",
  //               type: "item",
  //               icon: <Icon.Circle size={10} />,
  //               navLink: "/misc/error/404",
  //               permissions: ["admin", "editor"]
  //             },
  //             {
  //               id: "500",
  //               title: "500",
  //               type: "item",
  //               icon: <Icon.Circle size={10} />,
  //               navLink: "/misc/error/500",
  //               permissions: ["admin", "editor"]
  //             }
  //           ]
  //         },
  //         {
  //           id: "notAuthorized",
  //           title: "Not Authorized",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/misc/not-authorized",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "maintenance",
  //           title: "Maintenance",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/misc/maintenance",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: "charts-maps",
  //   title: "Charts & Maps",
  //   type: "dropdown",
  //   icon: <Icon.BarChart2 size={16} />,
  //   children: [
  //     {
  //       id: "charts",
  //       title: "Charts",
  //       type: "dropdown",
  //       badge: "success",
  //       badgeText: "3",
  //       icon: <Icon.PieChart size={16} />,
  //       children: [
  //         {
  //           id: "apex",
  //           title: "Apex",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/charts/apex",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "chartJs",
  //           title: "ChartJS",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/charts/chartjs",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "recharts",
  //           title: "Recharts",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/charts/recharts",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "leafletMaps",
  //       title: "Leaflet Maps",
  //       icon: <Icon.Map size={16} />,
  //       type: "item",
  //       navLink: "/maps/leaflet",
  //       permissions: ["admin", "editor"]
  //     }
  //   ]
  // },
  // {
  //   id: "others",
  //   title: "Others",
  //   type: "dropdown",
  //   icon: <Icon.MoreHorizontal size={16} />,
  //   children: [
  //     {
  //       id: "menuLevels",
  //       title: "Menu Levels",
  //       icon: <Icon.Menu size={16} />,
  //       type: "dropdown",
  //       children: [
  //         {
  //           id: "secondLevel",
  //           title: "Second Level",
  //           icon: <Icon.Circle size={10} />,
  //           type: "item",
  //           navlink: "",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "secondLevel1",
  //           title: "Second Level",
  //           icon: <Icon.Circle size={10} />,
  //           type: "dropdown",
  //           children: [
  //             {
  //               id: "ThirdLevel",
  //               title: "Third Level",
  //               icon: <Icon.Circle size={10} />,
  //               type: "item",
  //               navLink: "",
  //               permissions: ["admin", "editor"]
  //             },
  //             {
  //               id: "ThirdLevel1",
  //               title: "Third Level",
  //               icon: <Icon.Circle size={10} />,
  //               type: "item",
  //               navLink: "",
  //               permissions: ["admin", "editor"]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       id: "disabledMenu",
  //       title: "Disabled Menu",
  //       icon: <Icon.EyeOff size={16} />,
  //       type: "item",
  //       navLink: "#",
  //       permissions: ["admin", "editor"],
  //       disabled: true
  //     },
  //     {
  //       id: "documentation",
  //       title: "Documentation",
  //       icon: <Icon.Folder size={16} />,
  //       type: "external-link",
  //       navLink: "google.com",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "raiseSupport",
  //       title: "Raise Support",
  //       icon: <Icon.LifeBuoy size={16} />,
  //       type: "external-link",
  //       newTab: true,
  //       navLink: "https://pixinvent.ticksy.com/",
  //       permissions: ["admin", "editor"]
  //     }
  //   ]
  // }
];

export default horizontalMenuConfig;
