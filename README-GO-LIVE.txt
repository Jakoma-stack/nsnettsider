N&S Nettsider by Jakoma - go-live notes

This package is a static website for nsnettsider.com.

Before publishing, confirm these items:
1. If the legal operating entity is not exactly "N&S Nettsider by Jakoma", update privacy.html with:
   - full legal name
   - organisation number / company number
   - postal address
2. Confirm that hei@nsnettsider.com is live and monitored.
3. Confirm the Facebook page URL remains https://www.facebook.com/nsnettsider/
4. If you later add analytics, Meta Pixel, embedded maps, chat widgets, or video embeds that store or access data on the user's device:
   - update cookies.html
   - add a consent banner before those technologies load
5. If you want a web form instead of email/Facebook contact, add form handling and update privacy.html.

Current privacy posture:
- No analytics or marketing cookies
- No consent banner needed in current build because no non-essential tracking is included
- Language switching uses the URL, not cookies or local storage
