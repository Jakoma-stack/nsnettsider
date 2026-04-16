N&S Nettsider - go-live notes

This package is a static website for nsnettsider.com.

Positioning in this version:
- N&S Nettsider is the only public-facing brand.
- The site is framed as an enquiry-led information page with guide pricing.
- There is no checkout or order flow in this build.

Before publishing, confirm these items:
1. Confirm that hei@nsnettsider.com is live and monitored.
2. Confirm the Facebook page URL remains https://www.facebook.com/nsnettsider/
3. If you later add analytics, Meta Pixel, embedded maps, chat widgets, or video embeds that store or access data on the user's device:
   - update cookies.html
   - add a consent banner before those technologies load
4. If you want a web form instead of email/Facebook contact, add form handling and update privacy.html.
5. If you later move from enquiry-only testing to regular paid client work, review the legal and tax wording before publishing a final version.

Current privacy posture:
- No analytics or marketing cookies
- No consent banner in this build because no non-essential tracking is included
- Language switching uses the URL, not cookies or local storage
