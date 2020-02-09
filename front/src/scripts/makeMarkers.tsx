//@ts-ignore
const { createConverter } = require("convert-svg-to-png");
const fs = require("fs");
const util = require("util");

const readdir = util.promisify(fs.readdir);

const path = require("path");

const MARKER_DIR = path.join(__dirname, "components", "markers", "images");

/**
 * 아이콘 및 카카오맵 마커 이미지 사용:
 * @MARKER_DIR SVG 파일 등록 => make-markers 스크립트 실행 시 PNG 파일 변환
 */
(async function convertSvgFiles() {
  const converter = createConverter();

  try {
    const filePaths = await readdir(MARKER_DIR);

    for (const filePath of filePaths) {
      if (filePath.includes(".svg")) {
        const __filePath = path.join(MARKER_DIR, filePath);
        const outputFilePath = await converter.convertFile(__filePath);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    await converter.destroy();
  }
})();
