import fetch from "got-cjs";
import * as htmlparser from "htmlparser2";

export default class ImageHelper {
    public static async FetchImageFromRedditGallery(url: string): Promise<string[]> {
        const fetched = await fetch(url);

        if (!fetched || fetched.errored || fetched.statusCode != 200) {
            return [];
        }

        const dom = htmlparser.parseDocument(fetched.body);
        const img = htmlparser.DomUtils.findAll((x => x.tagName == "img" && x.attributes.find(y => y.value.includes("https://preview.redd.it")) != null), dom.children);

        const imgSrc = img
            .flatMap(x => x.attributes.find(x => x.name == "src")?.value)
            .filter(x => x != undefined);

        return imgSrc;
    }
}