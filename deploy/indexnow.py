# IndexNow: avisa Bing/Yandex (e parceiros) de todas as URLs do sitemap assim que o site sobe.
# Google não usa IndexNow (lá vale o sitemap no Search Console). Nunca bloqueia o deploy.
import json, re, sys, urllib.request
key = open("public/indexnow-key.txt", encoding="utf-8").read().strip()
urls = re.findall(r"<loc>(.*?)</loc>", open("dist/sitemap-0.xml", encoding="utf-8").read())
body = json.dumps({"host": "www.menosclique.com.br", "key": key,
                   "keyLocation": f"https://www.menosclique.com.br/{key}.txt", "urlList": urls}).encode()
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=body,
                             headers={"Content-Type": "application/json; charset=utf-8"})
try:
    print("IndexNow:", urllib.request.urlopen(req, timeout=30).status, len(urls), "URLs")
except Exception as e:
    print("IndexNow falhou (nao bloqueia o deploy):", e)
