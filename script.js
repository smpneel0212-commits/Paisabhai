/**
 * PAISABHAI - Personalized Master-Driven Ledger Web Application
 * Client-side Single Page Application (100% Offline, Zero Backend)
 * Architecture: Master Tab Single Source of Truth + Daily Ledger + SheetJS Two-Way Sync
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA STORAGE & INITIAL STATE ENGINE
  // =========================================================================

  const STORAGE_KEY = 'paisabhai_ledger_store_v2';

  // Neutral, fully editable starter defaults
  const DEFAULT_INITIAL_STATE = {
    schemaVersion: 2,
    settings: {
      currency: '₹',
      appName: 'Paisabhai'
    },
    master: {
      particulars: [
        {
                "id": "part_1",
                "name": "AGRICULTURE",
                "status": "active",
                "order": 1
        },
        {
                "id": "part_2",
                "name": "GOAT FARM",
                "status": "active",
                "order": 2
        },
        {
                "id": "part_3",
                "name": "GTCO",
                "status": "active",
                "order": 3
        },
        {
                "id": "part_4",
                "name": "JATRA",
                "status": "active",
                "order": 4
        },
        {
                "id": "part_5",
                "name": "LOAN & TAX",
                "status": "active",
                "order": 5
        },
        {
                "id": "part_6",
                "name": "P&CO",
                "status": "active",
                "order": 6
        },
        {
                "id": "part_7",
                "name": "PERSONAL",
                "status": "active",
                "order": 7
        },
        {
                "id": "part_8",
                "name": "SIDDU MALKHED",
                "status": "active",
                "order": 8
        }
],
      categories: [
        {
                "id": "cat_1",
                "name": "ADVANCE",
                "linkedParticularId": null
        },
        {
                "id": "cat_2",
                "name": "AGRICULTURE",
                "linkedParticularId": null
        },
        {
                "id": "cat_3",
                "name": "AKANKSHA",
                "linkedParticularId": null
        },
        {
                "id": "cat_4",
                "name": "BARDAN",
                "linkedParticularId": null
        },
        {
                "id": "cat_5",
                "name": "DANA & TEMPLE",
                "linkedParticularId": null
        },
        {
                "id": "cat_6",
                "name": "DIESEL",
                "linkedParticularId": null
        },
        {
                "id": "cat_7",
                "name": "DOCTOR",
                "linkedParticularId": null
        },
        {
                "id": "cat_8",
                "name": "DUKAN KHARCH",
                "linkedParticularId": null
        },
        {
                "id": "cat_9",
                "name": "EDUCATION",
                "linkedParticularId": null
        },
        {
                "id": "cat_10",
                "name": "FEED",
                "linkedParticularId": null
        },
        {
                "id": "cat_11",
                "name": "FERTILIZER",
                "linkedParticularId": null
        },
        {
                "id": "cat_12",
                "name": "FOOD & ENT",
                "linkedParticularId": null
        },
        {
                "id": "cat_13",
                "name": "FUEL",
                "linkedParticularId": null
        },
        {
                "id": "cat_14",
                "name": "GIFT",
                "linkedParticularId": null
        },
        {
                "id": "cat_15",
                "name": "GLB HOME",
                "linkedParticularId": null
        },
        {
                "id": "cat_16",
                "name": "GUTGI",
                "linkedParticularId": null
        },
        {
                "id": "cat_17",
                "name": "HAMALI",
                "linkedParticularId": null
        },
        {
                "id": "cat_18",
                "name": "INTEREST",
                "linkedParticularId": null
        },
        {
                "id": "cat_19",
                "name": "JAMA",
                "linkedParticularId": null
        },
        {
                "id": "cat_20",
                "name": "KHAND & DANA",
                "linkedParticularId": null
        },
        {
                "id": "cat_21",
                "name": "KULI",
                "linkedParticularId": null
        },
        {
                "id": "cat_22",
                "name": "LOAN",
                "linkedParticularId": null
        },
        {
                "id": "cat_23",
                "name": "MACHINE",
                "linkedParticularId": null
        },
        {
                "id": "cat_24",
                "name": "MAINTAINANCE",
                "linkedParticularId": null
        },
        {
                "id": "cat_25",
                "name": "MEDICINE",
                "linkedParticularId": null
        },
        {
                "id": "cat_26",
                "name": "NEEL HOME",
                "linkedParticularId": null
        },
        {
                "id": "cat_27",
                "name": "PATTI",
                "linkedParticularId": null
        },
        {
                "id": "cat_28",
                "name": "INSHURANCE",
                "linkedParticularId": null
        },
        {
                "id": "cat_29",
                "name": "PHONE",
                "linkedParticularId": null
        },
        {
                "id": "cat_30",
                "name": "PRODUCT PURCHACE",
                "linkedParticularId": null
        },
        {
                "id": "cat_31",
                "name": "PURCHASE",
                "linkedParticularId": null
        },
        {
                "id": "cat_32",
                "name": "RASHI",
                "linkedParticularId": null
        },
        {
                "id": "cat_33",
                "name": "RENT",
                "linkedParticularId": null
        },
        {
                "id": "cat_34",
                "name": "SALARY",
                "linkedParticularId": null
        },
        {
                "id": "cat_35",
                "name": "SMP",
                "linkedParticularId": null
        },
        {
                "id": "cat_36",
                "name": "TAX",
                "linkedParticularId": null
        },
        {
                "id": "cat_37",
                "name": "TRANSPORT",
                "linkedParticularId": null
        },
        {
                "id": "cat_38",
                "name": "TRAVEL",
                "linkedParticularId": null
        },
        {
                "id": "cat_39",
                "name": "VACATION",
                "linkedParticularId": null
        },
        {
                "id": "cat_40",
                "name": "WORKERS",
                "linkedParticularId": null
        },
        {
                "id": "cat_41",
                "name": "KADTI",
                "linkedParticularId": null
        },
        {
                "id": "cat_42",
                "name": "RETURN",
                "linkedParticularId": null
        },
        {
                "id": "cat_43",
                "name": "BC",
                "linkedParticularId": null
        },
        {
                "id": "cat_44",
                "name": "INVESTMENT",
                "linkedParticularId": null
        },
        {
                "id": "cat_45",
                "name": "MOOG PATTI",
                "linkedParticularId": null
        },
        {
                "id": "cat_46",
                "name": "UDD PATTI",
                "linkedParticularId": null
        },
        {
                "id": "cat_47",
                "name": "TUR PATTI",
                "linkedParticularId": null
        },
        {
                "id": "cat_48",
                "name": "KADLI PATTI",
                "linkedParticularId": null
        },
        {
                "id": "cat_49",
                "name": "DAP",
                "linkedParticularId": null
        },
        {
                "id": "cat_50",
                "name": "VEHICLE",
                "linkedParticularId": null
        },
        {
                "id": "cat_51",
                "name": "PROPERTY",
                "linkedParticularId": null
        },
        {
                "id": "cat_52",
                "name": "JATRA",
                "linkedParticularId": null
        },
        {
                "id": "cat_53",
                "name": "OTHERS",
                "linkedParticularId": null
        },
        {
                "id": "cat_54",
                "name": "ONLINE",
                "linkedParticularId": null
        }
],
      people: [
        {
                "id": "p_1",
                "name": "AIYAPPA PUJARI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_2",
                "name": "AKSHAY SHETTY",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_3",
                "name": "ANIL PUJARI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_4",
                "name": "APPUSHETTY",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_5",
                "name": "ARJAPPA KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_6",
                "name": "AZAM AUTOMOBILE",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_7",
                "name": "BAI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_8",
                "name": "BARDAN",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_9",
                "name": "BASSAPPA LINGAMPALLI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_10",
                "name": "BASWARAJ BHEEMRAO",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_11",
                "name": "BASWARAJ CHITAPUR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_12",
                "name": "BASWARAJ DEVAR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_13",
                "name": "BASWARAJ DHOL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_14",
                "name": "BASWARAJ KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_15",
                "name": "RAJSHEKHER MANKAR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_16",
                "name": "BASWARAJ SHARNAIYA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_17",
                "name": "BHEEMRAO KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_18",
                "name": "BHEEMU (HUCH)",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_19",
                "name": "BHEEMU CHITAPUR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_20",
                "name": "BHEEMU DEBBI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_21",
                "name": "CHANA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_22",
                "name": "CHANDAMMA BYADER",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_23",
                "name": "CHANNU POLICE PATIL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_24",
                "name": "CMPATIL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_25",
                "name": "DADA SAHEB MARTUR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_26",
                "name": "DANDAPPA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_27",
                "name": "DEVAPPA & MALLAPPA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_28",
                "name": "DEVAPPA K",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_29",
                "name": "DIESEL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_30",
                "name": "DUKAN KHARCH",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_31",
                "name": "ERANNA PUJARI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_32",
                "name": "GTCO",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_33",
                "name": "GUNDAPPA GIRMAL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_34",
                "name": "GURU SWAMY",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_35",
                "name": "HAMALI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_36",
                "name": "HANMANTH CHITAPUR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_37",
                "name": "HANMANTH HUGAR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_38",
                "name": "HANMANTH PANCHAL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_39",
                "name": "HANMANTH RAO",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_40",
                "name": "HASHANNA PUJARI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_41",
                "name": "HVT",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_42",
                "name": "INTEREST",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_43",
                "name": "GPAY",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_44",
                "name": "JAGADEVI POLICE PATIL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_45",
                "name": "JAGAPPA CHITAPUR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_46",
                "name": "JAGAPPA MARENNA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_47",
                "name": "JAGAPPA NAIKODI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_48",
                "name": "JAGU HAMAL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_49",
                "name": "JAGU SHETTY",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_50",
                "name": "JAGU TENT HOUSE",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_51",
                "name": "JAGUSWAMY",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_52",
                "name": "JAMA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_53",
                "name": "JHANGIR SAAB",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_54",
                "name": "ONLINE",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_55",
                "name": "KALAPPA MADIVAL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_56",
                "name": "KARIYAPPA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_57",
                "name": "KASHAPPA BYADER",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_58",
                "name": "KASHAPPA KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_59",
                "name": "KHAND & DANA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_60",
                "name": "KHARIDI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_61",
                "name": "KHYALAPPA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_62",
                "name": "LIGHT BILL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_63",
                "name": "MAHADEVAPPA MASTER",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_64",
                "name": "MALLAPPA BUKANOR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_65",
                "name": "MALLAPPA BYADER",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_66",
                "name": "MALLAPPA DEBBI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_67",
                "name": "MARTHAND PUJARI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_68",
                "name": "MAYBOOB SAAB ITGAMPALLI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_69",
                "name": "MEHBOOB LINGAMPALLI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_70",
                "name": "MEHBOOBSAAB",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_71",
                "name": "MONAPPA KAMBAR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_72",
                "name": "MOUNESHWAR FERTILIZER",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_73",
                "name": "MUNIM",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_74",
                "name": "NAGADI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_75",
                "name": "NAGAMGOUDTI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_76",
                "name": "NAGAPPA SALALLI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_77",
                "name": "NAGU GIRMAL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_78",
                "name": "OTHERS",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_79",
                "name": "P&CO",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_80",
                "name": "PEERAPPA KATTIMANI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_81",
                "name": "PEERAPPA KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_82",
                "name": "RACHAI MATPATI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_83",
                "name": "RAJU MADIVAL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_84",
                "name": "RAMALU HADPAD",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_85",
                "name": "RAMESH MARUTI KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_86",
                "name": "RKT",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_87",
                "name": "RUDRAPPA KATTIMANI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_88",
                "name": "SANGAPPA KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_89",
                "name": "SANGAPPA MALAGI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_90",
                "name": "SHAMRAO BAVA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_91",
                "name": "SHANKAPPA MALAGI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_92",
                "name": "SHANKREPPA JAMADAR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_93",
                "name": "SHANKREPPA PUJARI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_94",
                "name": "SHANTAIYYA SWAMI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_95",
                "name": "SHANTAMMA DEBBI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_96",
                "name": "SHARNU POLICE PATIL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_97",
                "name": "SHARNU POST",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_98",
                "name": "SHEKAPPA JAMADAR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_99",
                "name": "SHIV MALAGI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_100",
                "name": "SHIVANAND KESERADGI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_101",
                "name": "SHIVKUMAR PATIL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_102",
                "name": "SHIVLING KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_103",
                "name": "SHIVRAJ PANCHAYAT",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_104",
                "name": "SIDDAPPA BELKOTI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_105",
                "name": "SIDDU GOWDA MARTUR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_106",
                "name": "SIDDU MALKHED",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_107",
                "name": "SMPATIL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_108",
                "name": "SRT",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_109",
                "name": "SURYAKANTH",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_110",
                "name": "SUTLI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_111",
                "name": "TIPPANNA  M",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_112",
                "name": "TIPPANNA DRIVER",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_113",
                "name": "TRANSPORT",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_114",
                "name": "TUR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_115",
                "name": "UDAY KUMAR",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_116",
                "name": "V.B.PATIL",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_117",
                "name": "VEERESH SHETTY",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_118",
                "name": "VINOD POST",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_119",
                "name": "VISHWANATH TIPPANNA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_120",
                "name": "WARE HOUSE",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_121",
                "name": "AIYYAPPA PUJARI BENAKNALLI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_122",
                "name": "CHANDAPPA DRIVER",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_123",
                "name": "PEERAPPA DEBBI KONK",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_124",
                "name": "BASWARAJ GIRMAL (GUNT)",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_125",
                "name": "INSURANCE",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_126",
                "name": "DEEPAK RAMDASI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_127",
                "name": "YALLAPPA PUJARI",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_128",
                "name": "JAGADEVI POST",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_129",
                "name": "MAHESH KURKUNTA",
                "roleTag": null,
                "phone": null
        },
        {
                "id": "p_130",
                "name": "MANJUNATH MADIVAL",
                "roleTag": null,
                "phone": null
        }
]
    },
    transactions: []
  };

  class Store {
    constructor() {
      this.state = this.loadState();
    }

        loadState() {
      try {
        // Check for v2 first, fallback to v1 to preserve user transactions
        let raw = localStorage.getItem(STORAGE_KEY);
        let oldV1 = null;
        if (!raw) {
          oldV1 = localStorage.getItem('paisabhai_ledger_store_v1');
        }

        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.master && Array.isArray(parsed.transactions)) {
            // Ensure schemaVersion 2 master is populated if empty
            if (!parsed.schemaVersion || parsed.schemaVersion < 2) {
              parsed.schemaVersion = 2;
              parsed.master = JSON.parse(JSON.stringify(DEFAULT_INITIAL_STATE.master));
            }
            return parsed;
          }
        } else if (oldV1) {
          // Upgrade from v1, keep transactions if any
          const parsedV1 = JSON.parse(oldV1);
          const newState = JSON.parse(JSON.stringify(DEFAULT_INITIAL_STATE));
          if (parsedV1 && Array.isArray(parsedV1.transactions)) {
            // Keep user transactions
            newState.transactions = parsedV1.transactions;
          }
          return newState;
        }
      } catch (err) {
        console.error('Error loading localStorage:', err);
      }
      return JSON.parse(JSON.stringify(DEFAULT_INITIAL_STATE));
    }

    saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      } catch (err) {
        console.error('Error saving state to localStorage:', err);
      }
    }

    resetToCleanSlate() {
      this.state = {
        settings: { currency: '₹', appName: 'Paisabhai' },
        master: { particulars: [], categories: [], people: [] },
        transactions: []
      };
      this.saveState();
    }
  }

  const store = new Store();

  // Helper date formatters
  function getTodayDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getYesterdayDateString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function generateId(prefix = 'id') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  }

  function compressImage(file, maxWidth = 1200, quality = 0.75) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve({
            name: file.name,
            type: 'image/jpeg',
            dataUrl: dataUrl
          });
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target.result;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  }

  function formatCurrency(amount) {
    const curr = store.state.settings.currency || '₹';
    const num = Number(amount) || 0;
    return `${curr}${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // =========================================================================
  // 2. CORE APPLICATION CONTROLLER
  // =========================================================================

  class AppController {
    constructor() {
      this.activeTab = 'entry';
      this.sortField = 'date';
      this.sortOrder = 'desc'; // 'asc' or 'desc'
      this.pendingImport = null;
    }

    init() {
      // Set today's date default
      const dateEl = document.getElementById('tx-date');
      if (dateEl) dateEl.value = getTodayDateString();

      // Render currency
      this.updateCurrencyUI();

      // Populate dropdowns & lists
      this.renderMasterUI();
      this.populateEntryDropdowns();
      this.renderRecentEntries();
      this.populateLedgerFilterDropdowns();
      this.applyFilters();

      // Lucide Icons
      if (window.lucide) {
        lucide.createIcons();
      }

      // Handle keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModals();
        }
      });
    }

    // -----------------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------------
    navigate(tabId) {
      this.activeTab = tabId;

      // Update Panel visibility
      document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById(`view-${tabId}`);
      if (activePanel) activePanel.classList.add('active');

      // Update Desktop Tabs
      document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
      const activeNavBtn = document.getElementById(`nav-btn-${tabId}`);
      if (activeNavBtn) activeNavBtn.classList.add('active');

      // Update Mobile Nav
      document.querySelectorAll('.mob-nav-tab').forEach(b => b.classList.remove('active'));
      const activeMobBtn = document.getElementById(`mob-nav-${tabId}`);
      if (activeMobBtn) activeMobBtn.classList.add('active');

      // Tab specific refresh
      if (tabId === 'ledger') {
        this.populateLedgerFilterDropdowns();
        this.applyFilters();
      } else if (tabId === 'master') {
        this.renderMasterUI();
      } else if (tabId === 'entry') {
        this.populateEntryDropdowns();
        this.renderRecentEntries();
      }

      if (window.lucide) lucide.createIcons();
    }

    // -----------------------------------------------------------------------
    // UI Helpers & Currency
    // -----------------------------------------------------------------------
    updateCurrencyUI() {
      const curr = store.state.settings.currency || '₹';
      document.getElementById('header-currency-symbol').textContent = curr;
      document.getElementById('form-currency-symbol').textContent = curr;
      document.querySelectorAll('.kpi-currency').forEach(el => el.textContent = curr);
    }

    setCurrency(curr) {
      if (!curr) return;
      store.state.settings.currency = curr.trim();
      store.saveState();
      this.updateCurrencyUI();
      this.applyFilters();
      this.renderRecentEntries();
      this.showToast(`Currency updated to ${store.state.settings.currency}`, 'success');
    }

    openSettingsModal() {
      document.getElementById('modal-settings').classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }

    showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      const bgColors = {
        success: 'bg-emerald-800 text-white border-emerald-700',
        error: 'bg-rose-800 text-white border-rose-700',
        info: 'bg-slate-900 text-white border-slate-800'
      };

      toast.className = `toast pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-xl text-xs font-semibold border ${bgColors[type] || bgColors.info}`;
      toast.innerHTML = `<span>${message}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 250);
      }, 3000);
    }

    closeModals() {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
    }

    // =======================================================================
    // 3. MASTER TAB MANAGEMENT (PARTICULARS, CATEGORIES, PEOPLE)
    // =======================================================================

    renderMasterUI() {
      this.renderMasterParticulars();
      this.renderMasterCategories();
      this.renderMasterPeople();
      this.updateCountsBadge();
      if (window.lucide) lucide.createIcons();
    }

    updateCountsBadge() {
      const partCount = store.state.master.particulars.length;
      const catCount = store.state.master.categories.length;
      const peopleCount = store.state.master.people.length;
      const txCount = store.state.transactions.length;

      document.getElementById('badge-particulars-count').textContent = partCount;
      document.getElementById('badge-categories-count').textContent = catCount;
      document.getElementById('badge-people-count').textContent = peopleCount;
      document.getElementById('badge-tx-count').textContent = txCount;
    }

    // --- A. Particulars (Cost Centers / Accounts) ---
    renderMasterParticulars() {
      const listEl = document.getElementById('master-particulars-list');
      const categoryLinkedSelect = document.getElementById('new-category-linked-particular');
      const quickCatLinked = document.getElementById('quick-category-linked');

      if (!listEl) return;
      listEl.innerHTML = '';

      // Populate category linking options
      const particulars = [...store.state.master.particulars].sort((a, b) => (a.order || 0) - (b.order || 0));

      if (categoryLinkedSelect) {
        categoryLinkedSelect.innerHTML = '<option value="">Global (All Particulars)</option>';
        particulars.forEach(p => {
          categoryLinkedSelect.innerHTML += `<option value="${p.id}">${p.name}</option>`;
        });
      }

      if (quickCatLinked) {
        quickCatLinked.innerHTML = '<option value="">Global (All Particulars)</option>';
        particulars.forEach(p => {
          quickCatLinked.innerHTML += `<option value="${p.id}">${p.name}</option>`;
        });
      }

      if (particulars.length === 0) {
        listEl.innerHTML = `<li class="py-6 text-center text-xs text-slate-400 italic">No particulars defined yet. Add your first cost center or account above!</li>`;
        return;
      }

      particulars.forEach((part, index) => {
        const txCount = store.state.transactions.filter(t => t.particularId === part.id).length;
        const isActive = part.status === 'active';

        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-3 rounded-xl border border-slate-200/80 hover:border-slate-300 bg-white transition';
        li.innerHTML = `
          <div class="flex items-center gap-2.5 min-w-0">
            <button onclick="app.toggleParticularStatus('${part.id}')" title="Click to Toggle Active/Inactive"
              class="w-2.5 h-2.5 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-slate-300'} flex-shrink-0 cursor-pointer">
            </button>
            <div class="truncate">
              <span class="text-xs font-bold text-slate-800 ${!isActive ? 'line-through text-slate-400' : ''}">${part.name}</span>
              <div class="flex items-center gap-1.5 text-[10px] text-slate-400">
                <span class="${isActive ? 'text-emerald-700' : 'text-slate-500'} font-semibold">${isActive ? 'Active' : 'Inactive'}</span>
                <span>•</span>
                <span>${txCount} txn${txCount === 1 ? '' : 's'}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1 flex-shrink-0">
            <button onclick="app.moveParticularOrder('${part.id}', -1)" title="Move Up" class="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 ${index === 0 ? 'opacity-30 pointer-events-none' : ''}">
              <i data-lucide="chevron-up" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="app.moveParticularOrder('${part.id}', 1)" title="Move Down" class="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 ${index === particulars.length - 1 ? 'opacity-30 pointer-events-none' : ''}">
              <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="app.promptEditParticular('${part.id}')" title="Rename" class="p-1 text-slate-400 hover:text-brand-600 rounded-lg hover:bg-slate-100">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="app.deleteParticular('${part.id}')" title="Delete" class="p-1 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `;
        listEl.appendChild(li);
      });
    }

    handleMasterAddParticular(e) {
      e.preventDefault();
      const input = document.getElementById('new-particular-name');
      const name = input.value.trim();
      if (!name) return;

      const newParticular = {
        id: generateId('part'),
        name: name,
        status: 'active',
        order: store.state.master.particulars.length + 1
      };

      store.state.master.particulars.push(newParticular);
      store.saveState();
      input.value = '';

      this.renderMasterUI();
      this.populateEntryDropdowns();
      this.populateLedgerFilterDropdowns();
      this.showToast(`Particular "${name}" created!`, 'success');
      if (window.lucide) lucide.createIcons();
    }

    toggleParticularStatus(id) {
      const part = store.state.master.particulars.find(p => p.id === id);
      if (part) {
        part.status = part.status === 'active' ? 'inactive' : 'active';
        store.saveState();
        this.renderMasterParticulars();
        this.populateEntryDropdowns();
        this.showToast(`"${part.name}" is now ${part.status}`, 'info');
        if (window.lucide) lucide.createIcons();
      }
    }

    moveParticularOrder(id, delta) {
      const list = store.state.master.particulars.sort((a, b) => (a.order || 0) - (b.order || 0));
      const idx = list.findIndex(p => p.id === id);
      if (idx < 0) return;
      const targetIdx = idx + delta;
      if (targetIdx < 0 || targetIdx >= list.length) return;

      const temp = list[idx].order;
      list[idx].order = list[targetIdx].order;
      list[targetIdx].order = temp;

      store.saveState();
      this.renderMasterParticulars();
      this.populateEntryDropdowns();
      if (window.lucide) lucide.createIcons();
    }

    promptEditParticular(id) {
      const part = store.state.master.particulars.find(p => p.id === id);
      if (!part) return;
      const newName = prompt('Enter new name for Particular:', part.name);
      if (newName && newName.trim() && newName.trim() !== part.name) {
        part.name = newName.trim();
        store.saveState();
        this.renderMasterUI();
        this.populateEntryDropdowns();
        this.populateLedgerFilterDropdowns();
        this.applyFilters();
        this.showToast('Particular renamed successfully', 'success');
      }
    }

    deleteParticular(id) {
      const part = store.state.master.particulars.find(p => p.id === id);
      if (!part) return;

      const txCount = store.state.transactions.filter(t => t.particularId === id).length;
      let msg = `Are you sure you want to delete Particular "${part.name}"?`;
      if (txCount > 0) {
        msg = `Warning: "${part.name}" is used in ${txCount} existing transactions. Deleting it will keep transactions but unassign this cost center. Proceed?`;
      }

      if (confirm(msg)) {
        store.state.master.particulars = store.state.master.particulars.filter(p => p.id !== id);
        // Clean linked categories
        store.state.master.categories.forEach(c => {
          if (c.linkedParticularId === id) c.linkedParticularId = null;
        });
        store.saveState();
        this.renderMasterUI();
        this.populateEntryDropdowns();
        this.populateLedgerFilterDropdowns();
        this.applyFilters();
        this.showToast(`Deleted "${part.name}"`, 'info');
      }
    }

    // --- B. Categories List ---
    renderMasterCategories() {
      const listEl = document.getElementById('master-categories-list');
      if (!listEl) return;
      listEl.innerHTML = '';

      const categories = store.state.master.categories;
      if (categories.length === 0) {
        listEl.innerHTML = `<li class="py-6 text-center text-xs text-slate-400 italic">No expense categories defined. Add your first category above!</li>`;
        return;
      }

      categories.forEach(cat => {
        const txCount = store.state.transactions.filter(t => t.categoryId === cat.id).length;
        let linkBadge = '<span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">Global (All)</span>';
        if (cat.linkedParticularId) {
          const linkedPart = store.state.master.particulars.find(p => p.id === cat.linkedParticularId);
          const partName = linkedPart ? linkedPart.name : 'Unknown';
          linkBadge = `<span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold truncate max-w-[120px]">↳ ${partName}</span>`;
        }

        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-3 rounded-xl border border-slate-200/80 hover:border-slate-300 bg-white transition';
        li.innerHTML = `
          <div class="truncate mr-2">
            <span class="text-xs font-bold text-slate-800 block truncate">${cat.name}</span>
            <div class="flex items-center gap-1.5 mt-0.5">
              ${linkBadge}
              <span class="text-[10px] text-slate-400">• ${txCount} txn${txCount === 1 ? '' : 's'}</span>
            </div>
          </div>
          <div class="flex items-center gap-1 flex-shrink-0">
            <button onclick="app.promptEditCategory('${cat.id}')" title="Edit Category" class="p-1 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-100">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="app.deleteCategory('${cat.id}')" title="Delete" class="p-1 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `;
        listEl.appendChild(li);
      });
    }

    handleMasterAddCategory(e) {
      e.preventDefault();
      const input = document.getElementById('new-category-name');
      const linkedSelect = document.getElementById('new-category-linked-particular');
      const name = input.value.trim();
      if (!name) return;

      const linkedId = linkedSelect.value || null;

      const newCategory = {
        id: generateId('cat'),
        name: name,
        linkedParticularId: linkedId
      };

      store.state.master.categories.push(newCategory);
      store.saveState();
      input.value = '';

      this.renderMasterCategories();
      this.populateEntryDropdowns();
      this.updateCountsBadge();
      this.showToast(`Category "${name}" created!`, 'success');
      if (window.lucide) lucide.createIcons();
    }

    promptEditCategory(id) {
      const cat = store.state.master.categories.find(c => c.id === id);
      if (!cat) return;
      const newName = prompt('Enter new category name:', cat.name);
      if (newName && newName.trim() && newName.trim() !== cat.name) {
        cat.name = newName.trim();
        store.saveState();
        this.renderMasterCategories();
        this.populateEntryDropdowns();
        this.applyFilters();
        this.showToast('Category renamed', 'success');
      }
    }

    deleteCategory(id) {
      const cat = store.state.master.categories.find(c => c.id === id);
      if (!cat) return;

      const txCount = store.state.transactions.filter(t => t.categoryId === id).length;
      let msg = `Delete category "${cat.name}"?`;
      if (txCount > 0) {
        msg = `Warning: "${cat.name}" is used in ${txCount} transactions. Deleting it will leave transactions without a category. Proceed?`;
      }

      if (confirm(msg)) {
        store.state.master.categories = store.state.master.categories.filter(c => c.id !== id);
        store.saveState();
        this.renderMasterCategories();
        this.populateEntryDropdowns();
        this.applyFilters();
        this.updateCountsBadge();
        this.showToast(`Category deleted`, 'info');
      }
    }

    // --- C. People / Contacts Directory ---
    renderMasterPeople() {
      const listEl = document.getElementById('master-people-list');
      if (!listEl) return;
      listEl.innerHTML = '';

      const people = store.state.master.people;
      if (people.length === 0) {
        listEl.innerHTML = `<li class="py-6 text-center text-xs text-slate-400 italic">No people or vendors added. Register your recurring payees above!</li>`;
        return;
      }

      people.forEach(p => {
        const txCount = store.state.transactions.filter(t => (t.personName || '').toLowerCase() === p.name.toLowerCase()).length;
        const initial = p.name.charAt(0).toUpperCase();

        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-3 rounded-xl border border-slate-200/80 hover:border-slate-300 bg-white transition';
        li.innerHTML = `
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
              ${initial}
            </div>
            <div class="truncate">
              <span class="text-xs font-bold text-slate-800 block truncate">${p.name}</span>
              <div class="flex items-center gap-1.5 text-[10px] text-slate-400">
                ${p.roleTag ? `<span class="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-medium">${p.roleTag}</span>` : ''}
                ${p.phone ? `<span>📞 ${p.phone}</span>` : ''}
                <span>• ${txCount} txn${txCount === 1 ? '' : 's'}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1 flex-shrink-0">
            <button onclick="app.promptEditPerson('${p.id}')" title="Edit Contact" class="p-1 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="app.deletePerson('${p.id}')" title="Delete" class="p-1 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `;
        listEl.appendChild(li);
      });
    }

    handleMasterAddPerson(e) {
      e.preventDefault();
      const nameInput = document.getElementById('new-person-name');
      const roleInput = document.getElementById('new-person-role');
      const phoneInput = document.getElementById('new-person-phone');

      const name = nameInput.value.trim();
      if (!name) return;

      const newPerson = {
        id: generateId('p'),
        name: name,
        roleTag: roleInput.value.trim() || null,
        phone: phoneInput.value.trim() || null
      };

      store.state.master.people.push(newPerson);
      store.saveState();

      nameInput.value = '';
      roleInput.value = '';
      phoneInput.value = '';

      this.renderMasterPeople();
      this.updateCountsBadge();
      this.showToast(`Contact "${name}" registered!`, 'success');
      if (window.lucide) lucide.createIcons();
    }

    promptEditPerson(id) {
      const p = store.state.master.people.find(person => person.id === id);
      if (!p) return;
      const newName = prompt('Enter person/vendor name:', p.name);
      if (newName && newName.trim()) {
        const oldName = p.name;
        p.name = newName.trim();
        p.roleTag = prompt('Role tag (optional):', p.roleTag || '') || null;
        p.phone = prompt('Phone number (optional):', p.phone || '') || null;

        // Update corresponding transactions if name changed
        store.state.transactions.forEach(t => {
          if (t.personName === oldName) t.personName = p.name;
        });

        store.saveState();
        this.renderMasterPeople();
        this.applyFilters();
        this.showToast('Contact updated', 'success');
      }
    }

    deletePerson(id) {
      const p = store.state.master.people.find(person => person.id === id);
      if (!p) return;
      if (confirm(`Remove "${p.name}" from your Contacts Directory?`)) {
        store.state.master.people = store.state.master.people.filter(person => person.id !== id);
        store.saveState();
        this.renderMasterPeople();
        this.updateCountsBadge();
        this.showToast('Contact removed', 'info');
      }
    }

    // =======================================================================
    // 4. DAILY TRANSACTION ENTRY MODULE & INLINE QUICK ADDS
    // =======================================================================

    populateEntryDropdowns(selectedPartId = null, selectedCatId = null) {
      const partSelect = document.getElementById('tx-particular');
      const catSelect = document.getElementById('tx-category');
      const hint = document.getElementById('particular-hint');

      if (!partSelect || !catSelect) return;

      const currentPartVal = selectedPartId || partSelect.value;
      const activeParticulars = store.state.master.particulars.filter(p => p.status === 'active');

      // Populate Particular Select
      partSelect.innerHTML = '<option value="">-- Select Particular --</option>';
      activeParticulars.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        if (p.id === currentPartVal) opt.selected = true;
        partSelect.appendChild(opt);
      });

      if (activeParticulars.length === 0) {
        hint.classList.remove('hidden');
      } else {
        hint.classList.add('hidden');
      }

      // Populate Categories based on chosen particular (Dependent Dropdown)
      this.populateCategoryDropdown(partSelect.value, selectedCatId);
    }

    populateCategoryDropdown(particularId, selectedCatId = null) {
      const catSelect = document.getElementById('tx-category');
      if (!catSelect) return;

      const currentCatVal = selectedCatId || catSelect.value;
      catSelect.innerHTML = '<option value="">-- Select Category --</option>';

      // Categories are either Global (linkedParticularId is null) OR linked to this specific particularId
      const availableCategories = store.state.master.categories.filter(c => {
        return !c.linkedParticularId || (particularId && c.linkedParticularId === particularId);
      });

      availableCategories.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name + (c.linkedParticularId ? ' (Linked)' : '');
        if (c.id === currentCatVal) opt.selected = true;
        catSelect.appendChild(opt);
      });
    }

    onParticularChange() {
      const partId = document.getElementById('tx-particular').value;
      this.populateCategoryDropdown(partId);
    }

    // --- Typeahead for Paid To Person ---
    onPersonInput(e) {
      const val = e.target.value.toLowerCase().trim();
      const listEl = document.getElementById('person-autocomplete-list');
      if (!listEl) return;

      const matches = store.state.master.people.filter(p => {
        return p.name.toLowerCase().includes(val) || (p.roleTag && p.roleTag.toLowerCase().includes(val));
      });

      if (matches.length === 0 || !val) {
        listEl.classList.add('hidden');
        return;
      }

      listEl.innerHTML = '';
      matches.slice(0, 6).forEach(m => {
        const div = document.createElement('div');
        div.className = 'px-3.5 py-2 hover:bg-slate-100 cursor-pointer flex items-center justify-between text-xs';
        div.innerHTML = `
          <span class="font-bold text-slate-800">${m.name}</span>
          ${m.roleTag ? `<span class="text-[10px] text-slate-500 bg-slate-200/60 px-1.5 py-0.5 rounded">${m.roleTag}</span>` : ''}
        `;
        div.onmousedown = () => {
          document.getElementById('tx-person').value = m.name;
          listEl.classList.add('hidden');
        };
        listEl.appendChild(div);
      });
      listEl.classList.remove('hidden');
    }

    showPersonDropdown() {
      const input = document.getElementById('tx-person');
      if (input.value.trim()) {
        this.onPersonInput({ target: input });
      }
    }

    hidePersonDropdownDelayed() {
      setTimeout(() => {
        const listEl = document.getElementById('person-autocomplete-list');
        if (listEl) listEl.classList.add('hidden');
      }, 200);
    }

    // --- Inline Quick Add Modals (Friction-Free Entry) ---
    openQuickAddParticular() {
      document.getElementById('quick-particular-name').value = '';
      document.getElementById('modal-quick-particular').classList.remove('hidden');
      setTimeout(() => document.getElementById('quick-particular-name').focus(), 50);
      if (window.lucide) lucide.createIcons();
    }

    handleQuickAddParticular(e) {
      e.preventDefault();
      const name = document.getElementById('quick-particular-name').value.trim();
      if (!name) return;

      const newPart = {
        id: generateId('part'),
        name: name,
        status: 'active',
        order: store.state.master.particulars.length + 1
      };

      store.state.master.particulars.push(newPart);
      store.saveState();

      this.closeModals();
      this.renderMasterParticulars();
      this.populateEntryDropdowns(newPart.id);
      this.populateLedgerFilterDropdowns();
      this.showToast(`Created & selected Particular "${name}"`, 'success');
    }

    openQuickAddCategory() {
      const currentPartId = document.getElementById('tx-particular').value;
      const select = document.getElementById('quick-category-linked');
      document.getElementById('quick-category-name').value = '';
      if (select && currentPartId) {
        select.value = currentPartId;
      }
      document.getElementById('modal-quick-category').classList.remove('hidden');
      setTimeout(() => document.getElementById('quick-category-name').focus(), 50);
      if (window.lucide) lucide.createIcons();
    }

    handleQuickAddCategory(e) {
      e.preventDefault();
      const name = document.getElementById('quick-category-name').value.trim();
      const linkedId = document.getElementById('quick-category-linked').value || null;
      if (!name) return;

      const newCat = {
        id: generateId('cat'),
        name: name,
        linkedParticularId: linkedId
      };

      store.state.master.categories.push(newCat);
      store.saveState();

      this.closeModals();
      this.renderMasterCategories();
      const partId = document.getElementById('tx-particular').value;
      this.populateCategoryDropdown(partId, newCat.id);
      this.showToast(`Created & selected Category "${name}"`, 'success');
    }

    openQuickAddPerson() {
      document.getElementById('quick-person-name').value = '';
      document.getElementById('quick-person-role').value = '';
      document.getElementById('quick-person-phone').value = '';
      document.getElementById('modal-quick-person').classList.remove('hidden');
      setTimeout(() => document.getElementById('quick-person-name').focus(), 50);
      if (window.lucide) lucide.createIcons();
    }

    handleQuickAddPerson(e) {
      e.preventDefault();
      const name = document.getElementById('quick-person-name').value.trim();
      const role = document.getElementById('quick-person-role').value.trim();
      const phone = document.getElementById('quick-person-phone').value.trim();
      if (!name) return;

      const newPerson = {
        id: generateId('p'),
        name: name,
        roleTag: role || null,
        phone: phone || null
      };

      store.state.master.people.push(newPerson);
      store.saveState();

      this.closeModals();
      this.renderMasterPeople();
      document.getElementById('tx-person').value = name;
      this.showToast(`Contact "${name}" registered & filled`, 'success');
    }


    // --- Device Media Attachment Handlers ---
    handleMediaSelect(event, context) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        this.showToast('Please select an image (JPG, PNG, WebP, etc.)', 'error');
        event.target.value = '';
        return;
      }

      this.showToast('Processing media from device...', 'info');

      compressImage(file, 1200, 0.75)
        .then(compressed => {
          if (context === 'entry') {
            this.currentEntryMedia = compressed;
            this.updateMediaPreviewUI('entry');
          } else if (context === 'edit') {
            this.currentEditMedia = compressed;
            this.updateMediaPreviewUI('edit');
          }
          this.showToast(`Attached: "${file.name}"`, 'success');
        })
        .catch(err => {
          console.error('Media processing error:', err);
          this.showToast('Could not process selected media', 'error');
        })
        .finally(() => {
          event.target.value = '';
        });
    }

    updateMediaPreviewUI(context) {
      if (context === 'entry') {
        const container = document.getElementById('tx-media-preview-container');
        const img = document.getElementById('tx-media-preview-img');
        const nameEl = document.getElementById('tx-media-preview-name');
        if (container && img && nameEl) {
          if (this.currentEntryMedia) {
            img.src = this.currentEntryMedia.dataUrl;
            nameEl.textContent = this.currentEntryMedia.name;
            container.classList.remove('hidden');
          } else {
            img.src = '';
            nameEl.textContent = '';
            container.classList.add('hidden');
          }
        }
      } else if (context === 'edit') {
        const container = document.getElementById('edit-media-preview-container');
        const img = document.getElementById('edit-media-preview-img');
        const nameEl = document.getElementById('edit-media-preview-name');
        if (container && img && nameEl) {
          if (this.currentEditMedia) {
            img.src = this.currentEditMedia.dataUrl;
            nameEl.textContent = this.currentEditMedia.name;
            container.classList.remove('hidden');
          } else {
            img.src = '';
            nameEl.textContent = '';
            container.classList.add('hidden');
          }
        }
      }
      if (window.lucide) lucide.createIcons();
    }

    removeMedia(context) {
      if (context === 'entry') {
        this.currentEntryMedia = null;
        this.updateMediaPreviewUI('entry');
      } else if (context === 'edit') {
        this.currentEditMedia = null;
        this.updateMediaPreviewUI('edit');
      }
      this.showToast('Attached media removed', 'info');
    }

    previewCurrentMedia(context) {
      const media = context === 'entry' ? this.currentEntryMedia : this.currentEditMedia;
      if (!media) return;
      this.openMediaViewerModal(media.dataUrl, media.name, 'Preview from device');
    }

    viewTransactionMedia(txId) {
      const tx = store.state.transactions.find(t => t.id === txId);
      if (!tx || !tx.media) {
        this.showToast('No media attached to this transaction', 'info');
        return;
      }
      const part = store.state.master.particulars.find(p => p.id === tx.particularId);
      const subtitle = `${tx.date} • ${part ? part.name : 'Ledger'} • ${formatCurrency(tx.amount)} • ${tx.personName || ''}`;
      this.openMediaViewerModal(tx.media.dataUrl, tx.media.name || 'Receipt.jpg', subtitle);
    }

    openMediaViewerModal(dataUrl, name, subtitle = '') {
      const modal = document.getElementById('modal-media-viewer');
      const img = document.getElementById('media-viewer-img');
      const title = document.getElementById('media-viewer-title');
      const sub = document.getElementById('media-viewer-subtitle');
      const dl = document.getElementById('media-viewer-download');

      if (!modal || !img) return;

      img.src = dataUrl;
      title.textContent = name || 'Bill / Receipt';
      sub.textContent = subtitle;
      dl.href = dataUrl;
      dl.download = name || 'attached_bill.jpg';

      modal.classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }

    // --- Save Transaction Submit ---
    handleTransactionSubmit(e) {
      e.preventDefault();

      const date = document.getElementById('tx-date').value;
      const particularId = document.getElementById('tx-particular').value;
      const categoryId = document.getElementById('tx-category').value;
      const personName = document.getElementById('tx-person').value.trim();
      const amount = parseFloat(document.getElementById('tx-amount').value);
      const notes = document.getElementById('tx-notes').value.trim();

      const modeRadio = document.querySelector('input[name="payment_mode"]:checked');
      const paymentMode = modeRadio ? modeRadio.value : 'Cash';

      if (!date || !particularId || !categoryId || isNaN(amount) || amount <= 0) {
        this.showToast('Please fill all mandatory fields correctly', 'error');
        return;
      }

      // Check if person entered is new -> auto add to People directory if desirable
      if (personName) {
        const exists = store.state.master.people.some(p => p.name.toLowerCase() === personName.toLowerCase());
        if (!exists) {
          store.state.master.people.push({
            id: generateId('p'),
            name: personName,
            roleTag: 'General Payee',
            phone: null
          });
          this.renderMasterPeople();
        }
      }

      const newTx = {
        id: generateId('tx'),
        date,
        particularId,
        categoryId,
        personName: personName || 'N/A',
        amount,
        paymentMode,
        notes: notes || '-',
        media: this.currentEntryMedia ? { ...this.currentEntryMedia } : null
      };

      store.state.transactions.unshift(newTx);
      store.saveState();

      // Feedback & UI Update
      this.showToast(`Saved transaction: ${formatCurrency(amount)}`, 'success');
      this.resetEntryForm(false); // keep date
      this.renderRecentEntries();
      this.updateCountsBadge();

      // Also refresh ledger if open
      this.applyFilters();
    }

    resetEntryForm(clearDate = true) {
      if (clearDate) {
        document.getElementById('tx-date').value = getTodayDateString();
      }
      document.getElementById('tx-amount').value = '';
      document.getElementById('tx-particular').value = '';
      document.getElementById('tx-category').innerHTML = '<option value="">-- Select Category --</option>';
      document.getElementById('tx-person').value = '';
      document.getElementById('tx-notes').value = '';
      this.currentEntryMedia = null;
      this.updateMediaPreviewUI('entry');

      const cashRadio = document.querySelector('input[name="payment_mode"][value="Cash"]');
      if (cashRadio) cashRadio.checked = true;
    }

    renderRecentEntries() {
      const container = document.getElementById('recent-entries-list');
      if (!container) return;
      container.innerHTML = '';

      const recent = store.state.transactions.slice(0, 4);
      if (recent.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 italic py-2">No transactions recorded yet.</p>`;
        return;
      }

      recent.forEach(tx => {
        const part = store.state.master.particulars.find(p => p.id === tx.particularId);
        const cat = store.state.master.categories.find(c => c.id === tx.categoryId);

        const div = document.createElement('div');
        div.className = 'flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs';
        div.innerHTML = `
          <div class="truncate mr-2">
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-slate-800">${part ? part.name : 'Unknown'}</span>
              <span class="text-slate-400">•</span>
              <span class="text-slate-600">${cat ? cat.name : 'Unknown'}</span>
            </div>
            <div class="text-[11px] text-slate-400 mt-0.5 truncate">
              <span>${tx.date}</span> | <span>${tx.personName}</span> | <span>${tx.paymentMode}</span>${tx.media ? '<span class="text-emerald-700 font-bold inline-flex items-center gap-0.5 ml-1"><i data-lucide="paperclip" class="w-3 h-3"></i> Bill</span>' : ''}
            </div>
          </div>
          <span class="font-mono font-bold text-slate-900 flex-shrink-0">${formatCurrency(tx.amount)}</span>
        `;
        container.appendChild(div);
      });
    }

    // =======================================================================
    // 5. SPREADSHEET-LIKE LEDGER VIEW & ANALYTICS ENGINE
    // =======================================================================

    populateLedgerFilterDropdowns() {
      const partFilter = document.getElementById('filter-particular');
      const personFilter = document.getElementById('filter-person');

      if (partFilter) {
        const cur = partFilter.value;
        partFilter.innerHTML = '<option value="all">All Particulars</option>';
        store.state.master.particulars.forEach(p => {
          partFilter.innerHTML += `<option value="${p.id}" ${p.id === cur ? 'selected' : ''}>${p.name}</option>`;
        });
      }

      if (personFilter) {
        const curPerson = personFilter.value;
        personFilter.innerHTML = '<option value="all">All Payees</option>';
        // Unique person names from master + transactions
        const names = new Set();
        store.state.master.people.forEach(p => names.add(p.name));
        store.state.transactions.forEach(t => { if (t.personName && t.personName !== 'N/A') names.add(t.personName); });

        Array.from(names).sort().forEach(name => {
          personFilter.innerHTML += `<option value="${name}" ${name === curPerson ? 'selected' : ''}>${name}</option>`;
        });
      }
    }

    onDatePresetChange() {
      const preset = document.getElementById('filter-date-preset').value;
      const customRow = document.getElementById('custom-date-row');
      if (preset === 'custom') {
        customRow.classList.remove('hidden');
        customRow.classList.add('grid');
      } else {
        customRow.classList.add('hidden');
        customRow.classList.remove('grid');
      }
      this.applyFilters();
    }

    clearSearch() {
      document.getElementById('ledger-search').value = '';
      document.getElementById('search-clear-btn').classList.add('hidden');
      this.applyFilters();
    }

    resetFilters() {
      document.getElementById('ledger-search').value = '';
      document.getElementById('filter-date-preset').value = 'all';
      document.getElementById('filter-particular').value = 'all';
      document.getElementById('filter-person').value = 'all';
      document.getElementById('filter-mode').value = 'all';
      document.getElementById('custom-date-row').classList.add('hidden');
      this.applyFilters();
    }

    setSort(field) {
      if (this.sortField === field) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortField = field;
        this.sortOrder = (field === 'date' || field === 'amount') ? 'desc' : 'asc';
      }
      this.applyFilters();
    }

    applyFilters() {
      const query = (document.getElementById('ledger-search').value || '').toLowerCase().trim();
      const datePreset = document.getElementById('filter-date-preset').value;
      const partFilter = document.getElementById('filter-particular').value;
      const personFilter = document.getElementById('filter-person').value;
      const modeFilter = document.getElementById('filter-mode').value;

      const clearSearchBtn = document.getElementById('search-clear-btn');
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', !query);
      }

      // Date Range Calculation
      let fromDate = null;
      let toDate = null;
      const todayStr = getTodayDateString();
      const yesterdayStr = getYesterdayDateString();

      if (datePreset === 'today') {
        fromDate = todayStr;
        toDate = todayStr;
      } else if (datePreset === 'yesterday') {
        fromDate = yesterdayStr;
        toDate = yesterdayStr;
      } else if (datePreset === 'this_month') {
        const now = new Date();
        const startOfMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`;
        fromDate = startOfMonth;
        toDate = todayStr;
      } else if (datePreset === 'last_month') {
        const now = new Date();
        const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        fromDate = `${lastMonthDate.getFullYear()}-${String(lastMonthDate.getMonth() + 1).padStart(2, '0')}-01`;
        toDate = `${lastMonthEnd.getFullYear()}-${String(lastMonthEnd.getMonth() + 1).padStart(2, '0')}-${String(lastMonthEnd.getDate()).padStart(2, '0')}`;
      } else if (datePreset === 'custom') {
        fromDate = document.getElementById('filter-date-from').value || null;
        toDate = document.getElementById('filter-date-to').value || null;
      }

      // Filter Evaluation
      const filtered = store.state.transactions.filter(tx => {
        // Particular Filter
        if (partFilter !== 'all' && tx.particularId !== partFilter) return false;

        // Person Filter
        if (personFilter !== 'all' && (tx.personName || '').toLowerCase() !== personFilter.toLowerCase()) return false;

        // Payment Mode Filter
        if (modeFilter !== 'all' && tx.paymentMode !== modeFilter) return false;

        // Date Range Filter
        if (fromDate && tx.date < fromDate) return false;
        if (toDate && tx.date > toDate) return false;

        // Global Search across Particular, Category, Payee, and Notes
        if (query) {
          const part = store.state.master.particulars.find(p => p.id === tx.particularId);
          const cat = store.state.master.categories.find(c => c.id === tx.categoryId);
          const partName = part ? part.name.toLowerCase() : '';
          const catName = cat ? cat.name.toLowerCase() : '';
          const person = (tx.personName || '').toLowerCase();
          const notes = (tx.notes || '').toLowerCase();
          const mode = (tx.paymentMode || '').toLowerCase();
          const amountStr = String(tx.amount);

          const matches = partName.includes(query) ||
            catName.includes(query) ||
            person.includes(query) ||
            notes.includes(query) ||
            mode.includes(query) ||
            amountStr.includes(query);

          if (!matches) return false;
        }

        return true;
      });

      // Sorting
      filtered.sort((a, b) => {
        let valA = a[this.sortField];
        let valB = b[this.sortField];

        if (this.sortField === 'amount') {
          valA = Number(valA);
          valB = Number(valB);
        }

        if (valA < valB) return this.sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });

      // Render Table & Update KPIs
      this.renderLedgerTable(filtered);
      this.updateRunningSummaries(filtered);
    }

    renderLedgerTable(transactions) {
      const tbody = document.getElementById('ledger-table-body');
      const emptyState = document.getElementById('ledger-empty-state');
      const table = document.getElementById('ledger-table');
      const showingCount = document.getElementById('ledger-showing-count');
      const totalCount = document.getElementById('ledger-total-count');

      showingCount.textContent = transactions.length;
      totalCount.textContent = store.state.transactions.length;

      if (!tbody) return;
      tbody.innerHTML = '';

      if (transactions.length === 0) {
        table.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
      }

      table.classList.remove('hidden');
      emptyState.classList.add('hidden');

      transactions.forEach(tx => {
        const part = store.state.master.particulars.find(p => p.id === tx.particularId);
        const cat = store.state.master.categories.find(c => c.id === tx.categoryId);

        // Mode badge styling
        const modeBadgeClasses = {
          'Cash': 'bg-emerald-50 text-emerald-700 border-emerald-200',
          'UPI': 'bg-indigo-50 text-indigo-700 border-indigo-200',
          'Bank Transfer': 'bg-blue-50 text-blue-700 border-blue-200',
          'Cheque': 'bg-amber-50 text-amber-700 border-amber-200',
          'Credit/Udhar': 'bg-rose-50 text-rose-700 border-rose-200'
        };

        const tr = document.createElement('tr');
        tr.className = 'border-b border-slate-100 hover:bg-slate-50/80 text-xs transition';
        tr.innerHTML = `
          <td class="py-3 px-4 font-mono font-medium text-slate-600 whitespace-nowrap">${tx.date}</td>
          <td class="py-3 px-4 font-bold text-slate-800">${part ? part.name : '<span class="text-slate-400 italic">Unassigned</span>'}</td>
          <td class="py-3 px-4 text-slate-700">${cat ? cat.name : '<span class="text-slate-400 italic">Unassigned</span>'}</td>
          <td class="py-3 px-4 text-slate-700 font-medium">${tx.personName || '—'}</td>
          <td class="py-3 px-4 text-right font-mono font-bold text-slate-900 whitespace-nowrap">${formatCurrency(tx.amount)}</td>
          <td class="py-3 px-4 whitespace-nowrap">
            <span class="px-2 py-0.5 rounded-full border text-[10px] font-semibold ${modeBadgeClasses[tx.paymentMode] || 'bg-slate-100 text-slate-700'}">
              ${tx.paymentMode}
            </span>
          </td>
          <td class="py-3 px-4 text-slate-600 max-w-xs">
            <div class="flex items-center gap-2">
              <span class="truncate" title="${tx.notes || ''}">${tx.notes || '—'}</span>
              ${tx.media ? `
                <button type="button" onclick="app.viewTransactionMedia('${tx.id}')" title="View attached bill/media" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] font-bold transition flex-shrink-0 cursor-pointer shadow-2xs">
                  <i data-lucide="paperclip" class="w-3 h-3"></i>
                  <span>Media</span>
                </button>
              ` : ''}
            </div>
          </td>
          <td class="py-3 px-4 text-center whitespace-nowrap">
            <div class="flex items-center justify-center gap-1">
              <button onclick="app.openEditTransactionModal('${tx.id}')" title="Edit Row" class="p-1.5 text-slate-400 hover:text-brand-600 rounded-lg hover:bg-slate-100 transition">
                <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="app.deleteTransaction('${tx.id}')" title="Delete Row" class="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });

      if (window.lucide) lucide.createIcons();
    }

    updateRunningSummaries(filteredTransactions) {
      let totalAmount = 0;
      let cashTotal = 0;
      let digitalTotal = 0;
      let creditTotal = 0;
      const partBreakdown = {};

      filteredTransactions.forEach(tx => {
        const amt = Number(tx.amount) || 0;
        totalAmount += amt;

        if (tx.paymentMode === 'Cash') {
          cashTotal += amt;
        } else if (tx.paymentMode === 'Credit/Udhar') {
          creditTotal += amt;
        } else {
          // UPI, Bank Transfer, Cheque
          digitalTotal += amt;
        }

        const partId = tx.particularId || 'unassigned';
        partBreakdown[partId] = (partBreakdown[partId] || 0) + amt;
      });

      // Update KPI Elements
      document.getElementById('kpi-total-amount').textContent = totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      document.getElementById('kpi-tx-count-label').textContent = `Across ${filteredTransactions.length} transaction${filteredTransactions.length === 1 ? '' : 's'}`;

      document.getElementById('kpi-cash-amount').textContent = formatCurrency(cashTotal);
      document.getElementById('kpi-digital-amount').textContent = formatCurrency(digitalTotal);
      document.getElementById('kpi-credit-amount').textContent = formatCurrency(creditTotal);

      // Render Particular Spending Breakdown Badges
      const breakdownEl = document.getElementById('kpi-particular-breakdown');
      if (breakdownEl) {
        breakdownEl.innerHTML = '';
        const keys = Object.keys(partBreakdown);
        if (keys.length === 0) {
          breakdownEl.innerHTML = `<span class="text-xs text-slate-400 italic">No expense data in active filter</span>`;
        } else {
          keys.forEach(pId => {
            const part = store.state.master.particulars.find(p => p.id === pId);
            const name = part ? part.name : 'Other / Unassigned';
            const spent = partBreakdown[pId];
            const badge = document.createElement('div');
            badge.className = 'px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 text-xs flex items-center gap-2';
            badge.innerHTML = `
              <span class="font-bold text-slate-700">${name}:</span>
              <span class="font-mono font-bold text-brand-700">${formatCurrency(spent)}</span>
            `;
            breakdownEl.appendChild(badge);
          });
        }
      }
    }

    // --- Row Edit Modal Handlers ---
    openEditTransactionModal(id) {
      const tx = store.state.transactions.find(t => t.id === id);
      if (!tx) return;

      document.getElementById('edit-tx-id').value = tx.id;
      document.getElementById('edit-tx-date').value = tx.date;
      document.getElementById('edit-tx-amount').value = tx.amount;
      document.getElementById('edit-tx-person').value = tx.personName || '';
      document.getElementById('edit-tx-mode').value = tx.paymentMode || 'Cash';
      document.getElementById('edit-tx-notes').value = tx.notes || '';
      this.currentEditMedia = tx.media ? { ...tx.media } : null;
      this.updateMediaPreviewUI('edit');

      // Populate edit particular dropdown
      const partSelect = document.getElementById('edit-tx-particular');
      partSelect.innerHTML = '';
      store.state.master.particulars.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        if (p.id === tx.particularId) opt.selected = true;
        partSelect.appendChild(opt);
      });

      // Populate edit category dropdown
      this.populateEditCategoryDropdown(tx.particularId, tx.categoryId);

      document.getElementById('modal-edit-transaction').classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }

    onEditParticularChange() {
      const partId = document.getElementById('edit-tx-particular').value;
      this.populateEditCategoryDropdown(partId);
    }

    populateEditCategoryDropdown(partId, selectedCatId = null) {
      const catSelect = document.getElementById('edit-tx-category');
      catSelect.innerHTML = '';
      const available = store.state.master.categories.filter(c => !c.linkedParticularId || c.linkedParticularId === partId);
      available.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        if (c.id === selectedCatId) opt.selected = true;
        catSelect.appendChild(opt);
      });
    }

    handleSaveEditedTransaction(e) {
      e.preventDefault();
      const id = document.getElementById('edit-tx-id').value;
      const tx = store.state.transactions.find(t => t.id === id);
      if (!tx) return;

      tx.date = document.getElementById('edit-tx-date').value;
      tx.amount = parseFloat(document.getElementById('edit-tx-amount').value);
      tx.particularId = document.getElementById('edit-tx-particular').value;
      tx.categoryId = document.getElementById('edit-tx-category').value;
      tx.personName = document.getElementById('edit-tx-person').value.trim() || 'N/A';
      tx.paymentMode = document.getElementById('edit-tx-mode').value;
      tx.notes = document.getElementById('edit-tx-notes').value.trim();
      tx.media = this.currentEditMedia ? { ...this.currentEditMedia } : null;

      store.saveState();
      this.closeModals();
      this.applyFilters();
      this.renderRecentEntries();
      this.showToast('Transaction updated successfully', 'success');
    }

    deleteTransaction(id) {
      const tx = store.state.transactions.find(t => t.id === id);
      if (!tx) return;
      if (confirm(`Delete transaction for ${formatCurrency(tx.amount)} on ${tx.date}?`)) {
        store.state.transactions = store.state.transactions.filter(t => t.id !== id);
        store.saveState();
        this.applyFilters();
        this.renderRecentEntries();
        this.updateCountsBadge();
        this.showToast('Transaction removed', 'info');
      }
    }

    // =======================================================================
    // 6. TWO-WAY SHEETJS EXCEL SYNCHRONIZATION
    // =======================================================================

    /**
     * 1-Click Export to Excel (.xlsx)
     * Generates 2 Sheets:
     *  Sheet 1: Ledger_Transactions
     *  Sheet 2: Master_Lookups
     */
    exportToExcel() {
      if (typeof XLSX === 'undefined') {
        this.showToast('SheetJS library is still loading. Please check your internet connection.', 'error');
        return;
      }

      try {
        const wb = XLSX.utils.book_new();

        // Sheet 1: Ledger_Transactions
        const txData = store.state.transactions.map(tx => {
          const part = store.state.master.particulars.find(p => p.id === tx.particularId);
          const cat = store.state.master.categories.find(c => c.id === tx.categoryId);
          return {
            'Date': tx.date,
            'Particular': part ? part.name : 'Unassigned',
            'Category': cat ? cat.name : 'Unassigned',
            'Paid To': tx.personName || '',
            'Amount': tx.amount,
            'Mode': tx.paymentMode,
            'Description': tx.notes || '',
            'Media_Attached': tx.media ? ('Yes - ' + tx.media.name) : 'No'
          };
        });

        const wsTransactions = XLSX.utils.json_to_sheet(txData);
        XLSX.utils.book_append_sheet(wb, wsTransactions, 'Ledger_Transactions');

        // Sheet 2: Master_Lookups
        const masterLookups = [];

        store.state.master.particulars.forEach(p => {
          masterLookups.push({
            'Type': 'Particular',
            'ID': p.id,
            'Name': p.name,
            'Status': p.status,
            'Linked_To': '',
            'Role_Tag': '',
            'Phone': ''
          });
        });

        store.state.master.categories.forEach(c => {
          const linkedPart = store.state.master.particulars.find(p => p.id === c.linkedParticularId);
          masterLookups.push({
            'Type': 'Category',
            'ID': c.id,
            'Name': c.name,
            'Status': 'active',
            'Linked_To': linkedPart ? linkedPart.name : 'Global',
            'Role_Tag': '',
            'Phone': ''
          });
        });

        store.state.master.people.forEach(person => {
          masterLookups.push({
            'Type': 'Person',
            'ID': person.id,
            'Name': person.name,
            'Status': 'active',
            'Linked_To': '',
            'Role_Tag': person.roleTag || '',
            'Phone': person.phone || ''
          });
        });

        const wsMaster = XLSX.utils.json_to_sheet(masterLookups);
        XLSX.utils.book_append_sheet(wb, wsMaster, 'Master_Lookups');

        // Generate Filename
        const fileName = `Paisabhai_Ledger_${getTodayDateString()}.xlsx`;
        XLSX.writeFile(wb, fileName);
        this.showToast(`Exported "${fileName}" successfully!`, 'success');

      } catch (err) {
        console.error('Export error:', err);
        this.showToast('Failed to export Excel file', 'error');
      }
    }

    /**
     * Import Excel / CSV with auto-detection of missing Master items
     */
    handleExcelImport(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      if (typeof XLSX === 'undefined') {
        this.showToast('SheetJS library unavailable', 'error');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: 'array' });

          // Determine target sheet (Ledger_Transactions or first sheet)
          const sheetName = workbook.SheetNames.includes('Ledger_Transactions')
            ? 'Ledger_Transactions'
            : workbook.SheetNames[0];

          const sheet = workbook.Sheets[sheetName];
          const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });

          if (!rows || rows.length === 0) {
            this.showToast('No transaction data found in file', 'error');
            return;
          }

          // Check also for Master_Lookups sheet if present
          if (workbook.SheetNames.includes('Master_Lookups')) {
            const masterSheet = workbook.Sheets['Master_Lookups'];
            const masterRows = XLSX.utils.sheet_to_json(masterSheet, { defval: '' });
            this.syncMasterFromLookupSheet(masterRows);
          }

          this.processImportRows(rows);

        } catch (err) {
          console.error('Import parse error:', err);
          this.showToast('Failed to parse Excel file. Check format.', 'error');
        } finally {
          e.target.value = ''; // Reset input
        }
      };

      reader.readAsArrayBuffer(file);
    }

    syncMasterFromLookupSheet(masterRows) {
      masterRows.forEach(row => {
        const type = (row.Type || row.type || '').toLowerCase();
        const name = (row.Name || row.name || '').trim();
        if (!name) return;

        if (type === 'particular') {
          const exists = store.state.master.particulars.some(p => p.name.toLowerCase() === name.toLowerCase());
          if (!exists) {
            store.state.master.particulars.push({
              id: generateId('part'),
              name: name,
              status: row.Status || 'active',
              order: store.state.master.particulars.length + 1
            });
          }
        } else if (type === 'category') {
          const exists = store.state.master.categories.some(c => c.name.toLowerCase() === name.toLowerCase());
          if (!exists) {
            store.state.master.categories.push({
              id: generateId('cat'),
              name: name,
              linkedParticularId: null
            });
          }
        } else if (type === 'person') {
          const exists = store.state.master.people.some(p => p.name.toLowerCase() === name.toLowerCase());
          if (!exists) {
            store.state.master.people.push({
              id: generateId('p'),
              name: name,
              roleTag: row.Role_Tag || null,
              phone: row.Phone || null
            });
          }
        }
      });
      store.saveState();
    }

    processImportRows(rows) {
      const newParticularsSet = new Set();
      const newCategoriesSet = new Set();
      const newPeopleSet = new Set();
      const parsedTransactions = [];

      rows.forEach(row => {
        // Standard column name mapping (case-insensitive)
        const dateRaw = row.Date || row.date || getTodayDateString();
        const partName = (row.Particular || row.particular || row.Cost_Center || 'General').trim();
        const catName = (row.Category || row.category || 'Miscellaneous').trim();
        const personName = (row['Paid To'] || row.Paid_To || row.Person || row.person || '').trim();
        const amount = parseFloat(row.Amount || row.amount || 0);
        const mode = row.Mode || row.mode || row.Payment_Mode || 'Cash';
        const notes = row.Description || row.description || row.Notes || row.notes || '';

        if (!partName || isNaN(amount) || amount <= 0) return;

        // Auto-detect missing particulars
        const part = store.state.master.particulars.find(p => p.name.toLowerCase() === partName.toLowerCase());
        if (!part) newParticularsSet.add(partName);

        // Auto-detect missing categories
        const cat = store.state.master.categories.find(c => c.name.toLowerCase() === catName.toLowerCase());
        if (!cat) newCategoriesSet.add(catName);

        // Auto-detect missing contacts
        if (personName && personName !== 'N/A') {
          const person = store.state.master.people.find(p => p.name.toLowerCase() === personName.toLowerCase());
          if (!person) newPeopleSet.add(personName);
        }

        parsedTransactions.push({
          date: dateRaw,
          partName,
          catName,
          personName: personName || 'N/A',
          amount,
          paymentMode: mode,
          notes
        });
      });

      if (parsedTransactions.length === 0) {
        this.showToast('No valid transactions found in file', 'error');
        return;
      }

      // If unrecognized items exist, prompt the user with reconciliation modal
      if (newParticularsSet.size > 0 || newCategoriesSet.size > 0 || newPeopleSet.size > 0) {
        this.pendingImport = {
          transactions: parsedTransactions,
          newParticulars: Array.from(newParticularsSet),
          newCategories: Array.from(newCategoriesSet),
          newPeople: Array.from(newPeopleSet)
        };
        this.showImportReconciliationModal();
      } else {
        // Directly import
        this.commitImportTransactions(parsedTransactions);
      }
    }

    showImportReconciliationModal() {
      const modal = document.getElementById('modal-import-reconcile');
      const pList = document.getElementById('import-new-particulars-list');
      const cList = document.getElementById('import-new-categories-list');
      const peList = document.getElementById('import-new-people-list');
      const countEl = document.getElementById('import-pending-count');

      countEl.textContent = this.pendingImport.transactions.length;

      pList.innerHTML = this.pendingImport.newParticulars.map(p =>
        `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">${p}</span>`
      ).join(' ') || '<span class="text-slate-400 italic">None</span>';

      cList.innerHTML = this.pendingImport.newCategories.map(c =>
        `<span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">${c}</span>`
      ).join(' ') || '<span class="text-slate-400 italic">None</span>';

      peList.innerHTML = this.pendingImport.newPeople.map(pe =>
        `<span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-semibold">${pe}</span>`
      ).join(' ') || '<span class="text-slate-400 italic">None</span>';

      modal.classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }

    confirmImportWithAutoRegister() {
      if (!this.pendingImport) return;

      // Register new particulars
      this.pendingImport.newParticulars.forEach(name => {
        store.state.master.particulars.push({
          id: generateId('part'),
          name,
          status: 'active',
          order: store.state.master.particulars.length + 1
        });
      });

      // Register new categories
      this.pendingImport.newCategories.forEach(name => {
        store.state.master.categories.push({
          id: generateId('cat'),
          name,
          linkedParticularId: null
        });
      });

      // Register new contacts
      this.pendingImport.newPeople.forEach(name => {
        store.state.master.people.push({
          id: generateId('p'),
          name,
          roleTag: 'Imported Contact',
          phone: null
        });
      });

      const txs = this.pendingImport.transactions;
      this.pendingImport = null;
      this.closeModals();

      this.commitImportTransactions(txs);
      this.renderMasterUI();
      this.populateEntryDropdowns();
      this.populateLedgerFilterDropdowns();
    }

    cancelImport() {
      this.pendingImport = null;
      this.closeModals();
      this.showToast('Import cancelled', 'info');
    }

    commitImportTransactions(rawTransactions) {
      let count = 0;
      rawTransactions.forEach(item => {
        // Find or fallback particularId
        let part = store.state.master.particulars.find(p => p.name.toLowerCase() === item.partName.toLowerCase());
        if (!part) {
          part = { id: generateId('part'), name: item.partName, status: 'active', order: store.state.master.particulars.length + 1 };
          store.state.master.particulars.push(part);
        }

        // Find or fallback categoryId
        let cat = store.state.master.categories.find(c => c.name.toLowerCase() === item.catName.toLowerCase());
        if (!cat) {
          cat = { id: generateId('cat'), name: item.catName, linkedParticularId: null };
          store.state.master.categories.push(cat);
        }

        store.state.transactions.unshift({
          id: generateId('tx'),
          date: item.date,
          particularId: part.id,
          categoryId: cat.id,
          personName: item.personName,
          amount: item.amount,
          paymentMode: item.paymentMode,
          notes: item.notes
        });
        count++;
      });

      store.saveState();
      this.applyFilters();
      this.renderRecentEntries();
      this.updateCountsBadge();
      this.showToast(`Successfully imported ${count} transactions!`, 'success');
    }

    // =======================================================================
    // 7. BACKUP, RESTORE & DATA RESET
    // =======================================================================

    downloadJsonBackup() {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(store.state, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `Paisabhai_Backup_${getTodayDateString()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      this.showToast('Backup JSON downloaded', 'success');
    }

    restoreJsonBackup(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed && parsed.master && Array.isArray(parsed.transactions)) {
            store.state = parsed;
            store.saveState();
            this.init();
            this.showToast('Backup restored successfully!', 'success');
          } else {
            this.showToast('Invalid backup file structure', 'error');
          }
        } catch (err) {
          this.showToast('Error parsing JSON backup file', 'error');
        } finally {
          e.target.value = '';
        }
      };
      reader.readAsText(file);
    }

    confirmResetAllData() {
      const pass = prompt('Type "RESET" to wipe all data and start completely fresh:');
      if (pass === 'RESET') {
        store.resetToCleanSlate();
        this.init();
        this.showToast('All data has been reset to a clean slate.', 'info');
      }
    }
  }

  // Instantiate application on window load
  window.app = new AppController();
  window.addEventListener('DOMContentLoaded', () => {
    window.app.init();
  });

})();
