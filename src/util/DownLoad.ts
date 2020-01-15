export default class DownloadUtil {
    public downloadFile(blob: Blob, name: string) {
        const reader = new FileReader();
        reader.readAsDataURL(blob);  // 转换为base64，可以直接放入a表情href
        reader.addEventListener("load", (e) => {
            const link = document.createElement("a");
            link.download = name;
            if (e.target && e.target instanceof FileReader) {
                link.href = (e.target.result || "").toString();
            }
            (document.body || document.getElementsByTagName("body")[0]).appendChild(link);
            link.click();
            link.remove();
        });
    }

    public downloadLink(link: string, name: string) {
        const a = document.createElement("a");
        a.download = name;
        a.href = link;
        (document.body || document.getElementsByTagName("body")[0]).appendChild(a);
        a.click();
        a.remove();
    }
}
