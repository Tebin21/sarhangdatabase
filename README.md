# سیستەمی بەڕێوەبردنی فرۆشتن - Sarhang Sales Management System

سیستەمێکی تایبەت بۆ بەڕێوەبردنی فرۆشتن و کۆکردنەوەی زانیاری لەسەر فرۆشراوەکان بە زمانی کوردی.

## تایبەتمەندیەکان

- 🔐 **سیستەمی چوونەژوورەوە**: پاراستنی زانیارییەکان
- 📊 **داشبۆرد**: بینینی کورتەی گشتی لە فرۆشتنەکان
- 🛒 **زیادکردنی فرۆشتن**: تۆمارکردنی فرۆشتنی نوێ
- 📋 **لیستی فرۆشراوەکان**: بەڕێوەبردن و دەستکاریکردنی فرۆشراوەکان
- 📄 **PDF ی دووزمانە**: دروستکردنی ڕاپۆرت بە کوردی و ئینگلیزی
- 🎨 **فۆنتی کوردی**: بەکارهێنانی فۆنتی Rabar بۆ نیشاندانی باشتری کوردی

## تەکنەلۆژیاکان

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: JSON File Storage
- **PDF Generation**: jsPDF
- **Font**: Rabar.TTF (Kurdish Font)

## دامەزراندن و کارپێکردن

### پێداویستیەکان
- Node.js (version 14 یان بەرزتر)
- npm

### هەنگاوەکان

1. **کۆپیکردنی پرۆژێکت**:
```bash
git clone [repository-url]
cd sarhang
```

2. **دامەزراندنی dependencies**:
```bash
npm install
```

3. **کارپێکردنی سێرڤەر**:
```bash
npm start
```

4. **کردنەوەی وێبسایت**:
بڕۆ بۆ: `http://localhost:3000`

### زانیاری چوونەژوورەوە
- **ناوی بەکارهێنەر**: admin
- **وشەی نهێنی**: password

## ڕێکخستنی فایلەکان

```
sarhang/
├── public/
│   ├── dashboard.html      # پەڕەی سەرەکی
│   ├── login.html         # پەڕەی چوونەژوورەوە
│   ├── sales.html         # زیادکردنی فرۆشتن
│   ├── sold.html          # لیستی فرۆشراوەکان
│   ├── style.css          # ستایلەکان
│   └── rabar.TTF          # فۆنتی کوردی
├── server.js              # سێرڤەری Node.js
├── package.json           # پێناسەی پرۆژێکت
└── README.md              # ئەم فایلە
```

## بەکارهێنان

1. **چوونەژوورەوە**: بەکارهێنانی admin/password
2. **داشبۆرد**: بینینی کورتەی گشتی
3. **زیادکردنی فرۆشتن**: تۆمارکردنی فرۆشتنی نوێ
4. **بەڕێوەبردنی فرۆشراوەکان**: دەستکاری و سڕینەوە
5. **دروستکردنی PDF**: ڕاپۆرتی دووزمانە

## بڵاوکردنەوە

### GitHub
1. دروستکردنی repository ی نوێ لە GitHub
2. زیادکردنی کۆدەکان:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main
```

### Netlify
1. پەیوەندیکردنی GitHub repository بە Netlify
2. ڕێکخستنی build settings:
   - Build command: `npm run build`
   - Publish directory: `public`

## پشتگیری

بۆ هەر پرسیار یان کێشەیەک، تکایە issue بکەرەوە لە GitHub repository.

## مۆڵەت

ئەم پرۆژێکتە بە مۆڵەتی MIT بڵاوکراوەتەوە.