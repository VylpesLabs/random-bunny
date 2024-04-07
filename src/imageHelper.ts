import fetch from "got-cjs";
import * as htmlparser from "htmlparser2";

export default class ImageHelper {
    public static async FetchImageFromRedditGallery(url: string): Promise<string | undefined> {
        const fetched = await fetch(url);

        if (!fetched) {
            return undefined;
        }

        const dom = htmlparser.parseDocument(fetched.body);
        const img = htmlparser.DomUtils.findOne((x => x.tagName == "img" && x.attributes.find(y => y.value.includes("https://preview.redd.it")) != null), dom.children, true);

        const imgSrc = img?.attributes.find(x => x.name == "src")?.value;

        return imgSrc;
    }
}