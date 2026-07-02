# EMC — Electric Mobility Competition
### 전기자동차 시대, 한국이 만드는 글로벌 축제

**E = mc²**

---

## 🚀 배포 방법 (GitHub + Vercel, 무료)

### 1단계: GitHub에 올리기

```bash
# 1. GitHub.com 에서 새 repository 만들기
#    이름 예시: emc-website
#    Public으로 설정

# 2. 터미널에서 (이 폴더 안에서):
git init
git add .
git commit -m "첫 번째 커밋: EMC 웹사이트"
git branch -M main
git remote add origin https://github.com/[내계정]/emc-website.git
git push -u origin main
```

### 2단계: Vercel 배포 (완전 무료)

1. [vercel.com](https://vercel.com) 접속 → GitHub 계정으로 로그인
2. **"Add New Project"** 클릭
3. `emc-website` 저장소 선택
4. **Framework Preset: "Other"** 선택 (순수 HTML)
5. **Deploy** 클릭 → 자동 배포!

배포 후 주소: `emc-website.vercel.app` (무료)

### 3단계: emc.city 도메인 연결 (나중에)

1. [namecheap.com](https://namecheap.com) 또는 [gabia.com](https://gabia.com) 에서 `emc.city` 구매
   - .city 도메인 연 약 $3~8 수준
2. Vercel → Settings → Domains → `emc.city` 추가
3. 도메인 구매처에서 DNS 설정 (Vercel이 안내해줌)

---

## 📁 파일 구조

```
emc-website/
├── index.html   # 메인 페이지
├── style.css    # 스타일
├── main.js      # 인터랙션
└── README.md    # 이 파일
```

---

## ✏️ 수정 방법

### 연락처 이메일 추가
`index.html`에서 `contact` 섹션 찾아서 이메일 추가

### 구글 폼 연결
```html
<!-- 기존 <form> 태그를 이걸로 교체 -->
<a href="https://forms.gle/[구글폼주소]" class="btn-primary">참가 신청하기 →</a>
```

### 내용 수정
`index.html` 파일을 텍스트 편집기로 열어서 수정 후 다시 push하면 자동 배포됩니다.

---

## 🌐 운영 비용

| 항목 | 비용 |
|------|------|
| GitHub | 무료 |
| Vercel 호스팅 | 무료 |
| emc.city 도메인 | 연 $3~8 |
| **합계** | **거의 무료** |

---

*Founder: Kent Kim (김형섭) · Harvard Economics · 21 books*

<!-- deploy trigger: 2026-07-02T16:49:47.294905 -->
