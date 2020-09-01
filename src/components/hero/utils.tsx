/// Fake downloading of a file by adding a <a></a>
export function serveFile(blob : any, fileName : string = "result.csv") {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }