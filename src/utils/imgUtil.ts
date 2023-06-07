import goodStorage from 'good-storage';

interface GlobModule {
    [key: string]: any;
}

export class ImgUtil {

    static imgList: Record<string, string> = {};

static storageImgList() {
        this.imgList = goodStorage.get('imgList') || {};
        if (this.isEmpty()) {
            this.loadAllImg();
            goodStorage.set('imgList', this.imgList);
        }
    }

    static isEmpty() {
        return !Object.getOwnPropertyNames(this.imgList).length;
    }

    static getImg(imgName: string) {
        return this.imgList[imgName];
    }

    static loadAllImg() {
        const imgMap = import.meta.glob<GlobModule>('../assets/**/*.+(png|jpg|gif|svg)', {eager: true});
        console.log('imgMap:', imgMap);
        let absolutePath: string = '';
        let imgName: string = '';

        for (let relativePath in imgMap ) {
            absolutePath = imgMap[relativePath].default;
            if (absolutePath) {
                imgName = absolutePath.substring(absolutePath.lastIndexOf('/') + 1);
                this.imgList[imgName] = absolutePath;
            }
        }

        console.log(this.imgList);
    }
}