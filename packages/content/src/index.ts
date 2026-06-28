export type LocaleCode = "en" | "zh-CN" | "es" | "fr" | "bn" | "ar";

export type LocaleContent = {
  code: LocaleCode;
  label: string;
  direction: "ltr" | "rtl";
  nav: {
    product: string;
    workflow: string;
    capacities: string;
    specs: string;
    support: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: string[];
  };
  benefitsTitle: string;
  benefits: Array<{
    title: string;
    body: string;
  }>;
  workflow: {
    title: string;
    body: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  capacity: {
    title: string;
    body: string;
    note: string;
  };
  compatibility: {
    title: string;
    body: string;
    recommended: string;
    check: string;
  };
  support: {
    title: string;
    body: string;
    cta: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const technicalFacts = {
  brand: "SAMSWEET",
  family: "Hiipoo Birdie",
  model: "SSW-MRCFA5216",
  category: "CFexpress Type A Memory Card",
  interface: "CFexpress Type A",
  protocol: "PCIe Gen3 x2 / NVMe 1.4",
  nand: "3D TLC",
  readSpeed: "Up to 800MB/s",
  writeSpeed: "Up to 800MB/s",
  dimensions: "28 x 20 x 2.7mm",
  operatingTemperature: "-15°C to 75°C",
  storageTemperature: "-40°C to 85°C",
  protection: "IP68, X-ray resistant",
  warranty: "3-year replacement service"
};

export const capacityOptions = [
  {
    capacity: "80GB",
    type: "P-SLC",
    image: "assets/birdie/capacity/80.jpg",
    recommendation: "Long-time high-bitrate 4K workflows"
  },
  {
    capacity: "128GB",
    type: "TLC",
    image: "assets/birdie/capacity/128.jpg",
    recommendation: "Everyday shooting, short 4K clips, and compact kits"
  },
  {
    capacity: "160GB",
    type: "P-SLC",
    image: "assets/birdie/capacity/160.jpg",
    recommendation: "Stable sustained writing for professional clips"
  },
  {
    capacity: "256GB",
    type: "TLC",
    image: "assets/birdie/capacity/256.jpg",
    recommendation: "Photography, travel, and daily 4K"
  },
  {
    capacity: "320GB",
    type: "P-SLC",
    image: "assets/birdie/capacity/320.jpg",
    recommendation: "Extended recording with stronger write stability"
  },
  {
    capacity: "512GB",
    type: "TLC",
    image: "assets/birdie/capacity/512.jpg",
    recommendation: "Wedding, commercial, and short-video projects"
  },
  {
    capacity: "1TB",
    type: "TLC",
    image: "assets/birdie/capacity/1t.jpg",
    recommendation: "Large creator libraries and longer field days"
  }
];

export const recommendedFormats = ["XAVC HS 4K", "XAVC S 4K", "XAVC S HD"];
export const confirmBeforeUse = ["XAVC S-I", "All-Intra", "8K", "special high-bitrate modes"];

export const locales: Record<LocaleCode, LocaleContent> = {
  en: {
    code: "en",
    label: "English",
    direction: "ltr",
    nav: {
      product: "Product",
      workflow: "Workflow",
      capacities: "Capacities",
      specs: "Specs",
      support: "Support"
    },
    hero: {
      eyebrow: "Hiipoo Birdie Series",
      headline: "SAMSWEET Birdie CFexpress Type A",
      subheadline:
        "High-speed storage for Sony CFexpress Type A cameras. Up to 800MB/s read/write performance for burst shooting, 4K recording, outdoor production, and reliable creator workflows.",
      ctaPrimary: "Explore Birdie",
      ctaSecondary: "View specs",
      badges: ["For Sony Type A", "Up to 800MB/s", "4K recording", "IP68 protection"]
    },
    benefitsTitle: "Small card. Serious field discipline.",
    benefits: [
      {
        title: "Made for CFexpress Type A",
        body: "This is not an SD card. Birdie is designed for cameras and video devices with a CFexpress Type A slot, especially compatible Sony models."
      },
      {
        title: "Built around 800MB/s-class speed",
        body: "Peak read/write performance helps large photo files, high-speed bursts, and 4K video workflows move more smoothly than ordinary SD cards."
      },
      {
        title: "Outdoor-ready protection",
        body: "IP68 protection, X-ray resistance, and wide temperature tolerance support travel, rainy days, field production, and airport security checks."
      }
    ],
    workflow: {
      title: "For bursts, 4K shoots, and faster offloads.",
      body:
        "Birdie is positioned for creators who need a compact Type A card for Sony bodies, short-form production, wedding work, travel, sports, and commercial field days.",
      stats: [
        { value: "800MB/s", label: "peak read" },
        { value: "800MB/s", label: "peak write" },
        { value: "NVMe 1.4", label: "protocol" }
      ]
    },
    capacity: {
      title: "Choose capacity by workflow, not by number alone.",
      body:
        "TLC capacities fit photography, travel, and everyday 4K. P-SLC versions are recommended when long-time high-bitrate recording needs stronger sustained writing.",
      note: "Up to 800MB/s means peak performance. Actual speed varies by camera, reader, interface, capacity, file size, temperature, and remaining storage."
    },
    compatibility: {
      title: "Clear compatibility for serious shoots.",
      body:
        "Recommended for Sony and compatible CFexpress Type A devices. Recording support depends on the exact camera model and settings.",
      recommended: "Recommended formats",
      check: "Confirm before purchase"
    },
    support: {
      title: "Three-year replacement service.",
      body:
        "For professional listings, state warranty scope clearly: non-human damage, proof of purchase, after-sales process, and whether data recovery is included.",
      cta: "Prepare reseller brief"
    },
    faq: [
      {
        question: "Is Birdie an SD card?",
        answer: "No. It is a CFexpress Type A memory card for devices with a Type A slot."
      },
      {
        question: "Does every capacity sustain 800MB/s?",
        answer: "No. 800MB/s is a peak read/write class. Sustained writing varies by capacity, version, host device, and recording conditions."
      },
      {
        question: "Can it record 8K or All-Intra formats?",
        answer: "Some high-bitrate modes require model-by-model confirmation. Check camera compatibility before purchase."
      }
    ]
  },
  "zh-CN": {
    code: "zh-CN",
    label: "简体中文",
    direction: "ltr",
    nav: {
      product: "产品",
      workflow: "工作流",
      capacities: "容量",
      specs: "参数",
      support: "支持"
    },
    hero: {
      eyebrow: "Hiipoo Birdie 小鸟系列",
      headline: "SAMSWEET Birdie CFexpress Type A",
      subheadline:
        "为 Sony CFexpress Type A 相机而生的高速存储。最高 800MB/s 读写性能，面向高速连拍、4K 录制、户外拍摄和创作者素材工作流。",
      ctaPrimary: "了解 Birdie",
      ctaSecondary: "查看参数",
      badges: ["适配 Sony Type A", "最高 800MB/s", "4K 录制", "IP68 防护"]
    },
    benefitsTitle: "小小一张卡，面向严肃拍摄现场。",
    benefits: [
      {
        title: "CFexpress Type A 规格",
        body: "它不是 SD 卡，而是适用于 CFexpress Type A 插槽设备的相机存储卡，重点面向兼容 Sony 机型。"
      },
      {
        title: "800MB/s 级峰值性能",
        body: "峰值读写性能帮助高像素照片、高速连拍和 4K 视频素材传输更顺畅。"
      },
      {
        title: "户外拍摄防护",
        body: "IP68、防 X 光和宽温环境适应能力，适合旅行、雨天、户外拍摄和机场安检场景。"
      }
    ],
    workflow: {
      title: "为连拍、4K 和快速导素材准备。",
      body:
        "Birdie 适合 Sony Type A 用户、短视频团队、婚礼摄影、旅行摄影、运动拍摄和商业外拍。",
      stats: [
        { value: "800MB/s", label: "峰值读取" },
        { value: "800MB/s", label: "峰值写入" },
        { value: "NVMe 1.4", label: "协议" }
      ]
    },
    capacity: {
      title: "按工作流选容量，不只看数字。",
      body:
        "TLC 大容量版本适合照片、旅行和日常 4K。长时间高码率录制建议选择持续写入更稳定的 P-SLC 版本。",
      note: "最高 800MB/s 指峰值性能；实际速度会受相机、读卡器、接口、容量、文件大小、温度和剩余空间影响。"
    },
    compatibility: {
      title: "拍摄前，把兼容性说清楚。",
      body: "推荐用于 Sony 及兼容 CFexpress Type A 设备；实际录制支持取决于具体机型和设置。",
      recommended: "推荐格式",
      check: "购买前确认"
    },
    support: {
      title: "三年包换服务。",
      body: "对外发布时建议清楚说明售后范围：非人为损坏、购买凭证、售后流程，以及是否包含数据恢复。",
      cta: "生成经销商简报"
    },
    faq: [
      {
        question: "Birdie 是 SD 卡吗？",
        answer: "不是。它是 CFexpress Type A 相机存储卡，用于支持 Type A 插槽的设备。"
      },
      {
        question: "所有容量都能持续 800MB/s 吗？",
        answer: "不能。800MB/s 是峰值读写档位，持续写入会受容量、版本、设备和拍摄条件影响。"
      },
      {
        question: "能录 8K 或 All-Intra 吗？",
        answer: "高码率模式需要按相机型号逐一确认，购买前应核对兼容性。"
      }
    ]
  },
  es: {
    code: "es",
    label: "Español",
    direction: "ltr",
    nav: {
      product: "Producto",
      workflow: "Flujo",
      capacities: "Capacidades",
      specs: "Especificaciones",
      support: "Soporte"
    },
    hero: {
      eyebrow: "Serie Hiipoo Birdie",
      headline: "SAMSWEET Birdie CFexpress Type A",
      subheadline:
        "Almacenamiento rápido para cámaras Sony CFexpress Type A. Hasta 800MB/s de lectura y escritura para ráfagas, grabación 4K y producción en exteriores.",
      ctaPrimary: "Explorar Birdie",
      ctaSecondary: "Ver detalles",
      badges: ["Para Sony Type A", "Hasta 800MB/s", "Grabación 4K", "Protección IP68"]
    },
    benefitsTitle: "Una tarjeta compacta para jornadas exigentes.",
    benefits: [
      {
        title: "Diseñada para CFexpress Type A",
        body: "No es una tarjeta SD. Está pensada para cámaras y dispositivos con ranura CFexpress Type A, especialmente modelos Sony compatibles."
      },
      {
        title: "Velocidad de clase 800MB/s",
        body: "El rendimiento máximo ayuda con archivos grandes, ráfagas rápidas y flujos de vídeo 4K."
      },
      {
        title: "Protección para exteriores",
        body: "IP68, resistencia a rayos X y tolerancia amplia de temperatura para viajes, lluvia y producción de campo."
      }
    ],
    workflow: {
      title: "Para ráfagas, 4K y descargas más ágiles.",
      body:
        "Birdie acompaña a usuarios Sony Type A en bodas, viajes, deportes, eventos y producción comercial ligera.",
      stats: [
        { value: "800MB/s", label: "lectura máxima" },
        { value: "800MB/s", label: "escritura máxima" },
        { value: "NVMe 1.4", label: "protocolo" }
      ]
    },
    capacity: {
      title: "Elige por flujo de trabajo.",
      body:
        "Las capacidades TLC son adecuadas para fotografía, viajes y 4K diario. Para grabación prolongada de alto bitrate, se recomiendan versiones P-SLC.",
      note: "Hasta 800MB/s indica rendimiento máximo; el resultado real varía según equipo y condiciones."
    },
    compatibility: {
      title: "Compatibilidad clara antes de grabar.",
      body: "Recomendada para Sony y dispositivos compatibles con CFexpress Type A.",
      recommended: "Formatos recomendados",
      check: "Confirmar antes de comprar"
    },
    support: {
      title: "Servicio de reemplazo por 3 años.",
      body: "Indica claramente condiciones de garantía, prueba de compra y alcance de recuperación de datos.",
      cta: "Preparar ficha"
    },
    faq: [
      {
        question: "¿Birdie es una tarjeta SD?",
        answer: "No. Es una tarjeta CFexpress Type A."
      },
      {
        question: "¿Sostiene 800MB/s siempre?",
        answer: "No. 800MB/s es rendimiento máximo; la escritura sostenida puede variar."
      },
      {
        question: "¿Sirve para 8K?",
        answer: "Los modos 8K o de alto bitrate deben confirmarse según cámara y ajustes."
      }
    ]
  },
  fr: {
    code: "fr",
    label: "Français",
    direction: "ltr",
    nav: {
      product: "Produit",
      workflow: "Flux",
      capacities: "Capacités",
      specs: "Fiche",
      support: "Support"
    },
    hero: {
      eyebrow: "Gamme Hiipoo Birdie",
      headline: "SAMSWEET Birdie CFexpress Type A",
      subheadline:
        "Un stockage rapide pour les appareils Sony CFexpress Type A. Jusqu'à 800MB/s en lecture et écriture pour les rafales, la vidéo 4K et les tournages en extérieur.",
      ctaPrimary: "Découvrir Birdie",
      ctaSecondary: "Voir la fiche",
      badges: ["Pour Sony Type A", "Jusqu'à 800MB/s", "Vidéo 4K", "Protection IP68"]
    },
    benefitsTitle: "Une petite carte pour des prises de vue exigeantes.",
    benefits: [
      {
        title: "Conçue pour CFexpress Type A",
        body: "Ce n'est pas une carte SD. Elle est destinée aux appareils équipés d'un slot CFexpress Type A, notamment les modèles Sony compatibles."
      },
      {
        title: "Classe de vitesse 800MB/s",
        body: "Les performances maximales facilitent les fichiers lourds, les rafales rapides et les flux vidéo 4K."
      },
      {
        title: "Protection terrain",
        body: "IP68, résistance aux rayons X et large tolérance thermique pour le voyage, la pluie et les tournages extérieurs."
      }
    ],
    workflow: {
      title: "Pour rafales, 4K et transferts plus rapides.",
      body:
        "Birdie accompagne les créateurs Sony Type A en mariage, voyage, événement, sport et production commerciale légère.",
      stats: [
        { value: "800MB/s", label: "lecture max." },
        { value: "800MB/s", label: "écriture max." },
        { value: "NVMe 1.4", label: "protocole" }
      ]
    },
    capacity: {
      title: "Choisir selon le flux de travail.",
      body:
        "Les versions TLC conviennent à la photo, au voyage et à la 4K quotidienne. Les versions P-SLC sont recommandées pour l'écriture soutenue.",
      note: "Jusqu'à 800MB/s indique une valeur maximale; les performances réelles varient selon les conditions."
    },
    compatibility: {
      title: "Clarifier la compatibilité avant le tournage.",
      body: "Recommandée pour Sony et appareils compatibles CFexpress Type A.",
      recommended: "Formats recommandés",
      check: "À confirmer avant achat"
    },
    support: {
      title: "Service de remplacement de 3 ans.",
      body: "Préciser les conditions de garantie, la preuve d'achat et la récupération de données.",
      cta: "Préparer la fiche"
    },
    faq: [
      {
        question: "Birdie est-elle une carte SD ?",
        answer: "Non. C'est une carte CFexpress Type A."
      },
      {
        question: "800MB/s est-il constant ?",
        answer: "Non. Il s'agit d'une valeur maximale; l'écriture soutenue varie."
      },
      {
        question: "Peut-elle enregistrer en 8K ?",
        answer: "Les modes 8K ou haut débit doivent être vérifiés selon l'appareil."
      }
    ]
  },
  bn: {
    code: "bn",
    label: "বাংলা",
    direction: "ltr",
    nav: {
      product: "পণ্য",
      workflow: "ওয়ার্কফ্লো",
      capacities: "ক্যাপাসিটি",
      specs: "স্পেকস",
      support: "সাপোর্ট"
    },
    hero: {
      eyebrow: "Hiipoo Birdie Series",
      headline: "SAMSWEET Birdie CFexpress Type A",
      subheadline:
        "Sony CFexpress Type A camera-এর জন্য high-speed storage. সর্বোচ্চ 800MB/s read/write performance, burst shooting, 4K recording এবং creator workflow-এর জন্য।",
      ctaPrimary: "Birdie দেখুন",
      ctaSecondary: "স্পেকস দেখুন",
      badges: ["Sony Type A", "Up to 800MB/s", "4K recording", "IP68 protection"]
    },
    benefitsTitle: "ছোট কার্ড, গুরুতর শুটিংয়ের জন্য প্রস্তুত।",
    benefits: [
      {
        title: "CFexpress Type A-এর জন্য",
        body: "এটি SD card নয়। Type A slot থাকা compatible Sony camera ও video device-এর জন্য তৈরি।"
      },
      {
        title: "800MB/s-class performance",
        body: "Peak performance বড় photo file, fast burst এবং 4K workflow সহজ করে।"
      },
      {
        title: "Outdoor protection",
        body: "IP68, X-ray resistance এবং wide temperature tolerance travel ও outdoor shooting-এ সাহায্য করে।"
      }
    ],
    workflow: {
      title: "Burst, 4K এবং দ্রুত file transfer-এর জন্য।",
      body:
        "Sony Type A creator, wedding, travel, sports এবং short-video production workflow-এর জন্য Birdie উপযোগী।",
      stats: [
        { value: "800MB/s", label: "peak read" },
        { value: "800MB/s", label: "peak write" },
        { value: "NVMe 1.4", label: "protocol" }
      ]
    },
    capacity: {
      title: "Workflow অনুযায়ী capacity বেছে নিন।",
      body:
        "TLC capacity photo, travel ও daily 4K-এর জন্য। Long-time high-bitrate recording-এর জন্য P-SLC version recommended.",
      note: "Up to 800MB/s peak performance; real speed device ও condition অনুযায়ী পরিবর্তিত হতে পারে।"
    },
    compatibility: {
      title: "শুটিংয়ের আগে compatibility নিশ্চিত করুন।",
      body: "Sony ও compatible CFexpress Type A device-এর জন্য recommended.",
      recommended: "Recommended formats",
      check: "Purchase-এর আগে check করুন"
    },
    support: {
      title: "3-year replacement service.",
      body: "Warranty condition, purchase proof এবং data recovery scope পরিষ্কারভাবে উল্লেখ করা উচিত।",
      cta: "Reseller brief"
    },
    faq: [
      {
        question: "Birdie কি SD card?",
        answer: "না। এটি CFexpress Type A card."
      },
      {
        question: "সবসময় 800MB/s থাকে?",
        answer: "না। 800MB/s peak performance; sustained write ভিন্ন হতে পারে।"
      },
      {
        question: "8K support করে?",
        answer: "8K বা high-bitrate mode camera model অনুযায়ী confirm করতে হবে।"
      }
    ]
  },
  ar: {
    code: "ar",
    label: "العربية",
    direction: "rtl",
    nav: {
      product: "المنتج",
      workflow: "سير العمل",
      capacities: "السعات",
      specs: "المواصفات",
      support: "الدعم"
    },
    hero: {
      eyebrow: "سلسلة Hiipoo Birdie",
      headline: "SAMSWEET Birdie CFexpress Type A",
      subheadline:
        "تخزين سريع لكاميرات Sony CFexpress Type A. أداء قراءة وكتابة يصل إلى 800MB/s للتصوير المتتابع وتسجيل 4K والإنتاج الخارجي.",
      ctaPrimary: "استكشف Birdie",
      ctaSecondary: "عرض المواصفات",
      badges: ["Sony Type A", "حتى 800MB/s", "تسجيل 4K", "حماية IP68"]
    },
    benefitsTitle: "بطاقة صغيرة جاهزة للتصوير الجاد.",
    benefits: [
      {
        title: "مصممة لـ CFexpress Type A",
        body: "ليست بطاقة SD. إنها مخصصة للأجهزة التي تحتوي على منفذ CFexpress Type A، خصوصا موديلات Sony المتوافقة."
      },
      {
        title: "أداء من فئة 800MB/s",
        body: "يساعد الأداء الأقصى في ملفات الصور الكبيرة والتصوير المتتابع وسير عمل فيديو 4K."
      },
      {
        title: "حماية للاستخدام الخارجي",
        body: "حماية IP68، مقاومة الأشعة السينية، وتحمل واسع للحرارة للسفر والإنتاج الميداني."
      }
    ],
    workflow: {
      title: "للتصوير المتتابع و4K ونقل الملفات بسرعة.",
      body:
        "Birdie مناسبة لمستخدمي Sony Type A وصناع المحتوى والتصوير في السفر والأحداث والعمل التجاري الخفيف.",
      stats: [
        { value: "800MB/s", label: "قراءة قصوى" },
        { value: "800MB/s", label: "كتابة قصوى" },
        { value: "NVMe 1.4", label: "البروتوكول" }
      ]
    },
    capacity: {
      title: "اختر السعة حسب سير العمل.",
      body:
        "سعات TLC مناسبة للتصوير والسفر و4K اليومي. يوصى بإصدارات P-SLC للتسجيل الطويل عالي البت.",
      note: "حتى 800MB/s يعني أداء أقصى؛ قد تختلف السرعة الفعلية حسب الجهاز والظروف."
    },
    compatibility: {
      title: "تأكد من التوافق قبل التصوير.",
      body: "موصى بها لأجهزة Sony والأجهزة المتوافقة مع CFexpress Type A.",
      recommended: "الصيغ الموصى بها",
      check: "تحقق قبل الشراء"
    },
    support: {
      title: "خدمة استبدال لمدة 3 سنوات.",
      body: "يجب توضيح شروط الضمان وإثبات الشراء وما إذا كان استرداد البيانات مشمولا.",
      cta: "إعداد ملف الموزع"
    },
    faq: [
      {
        question: "هل Birdie بطاقة SD؟",
        answer: "لا. إنها بطاقة CFexpress Type A."
      },
      {
        question: "هل 800MB/s ثابتة دائما؟",
        answer: "لا. إنها قيمة أداء قصوى، وقد تختلف الكتابة المستمرة."
      },
      {
        question: "هل تدعم 8K؟",
        answer: "يجب تأكيد أوضاع 8K أو البت العالي حسب موديل الكاميرا."
      }
    ]
  }
};

export function getLocale(locale: LocaleCode): LocaleContent {
  return locales[locale] ?? locales.en;
}
