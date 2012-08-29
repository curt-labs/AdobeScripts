// set the ruler units
var originalRulerUnites = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

var docFolder = Folder.selectDialog("Select a folder of photos to process");
//var outputFolder = Folder.selectDialog("Select the folder to save the files to");
//var dpi = Window.prompt ("Enter a DPI (Defaults to 300)",300,"DPI");
var fileList = docFolder.getFiles(/\.(jpg|tif|psd|eps|png)$/i);

var folderSegments = docFolder.toString().split('/');
/*docFolder = "";
for(var i = 0; i < folderSegments.length - 1; i++){
        if(i != 0){
            docFolder += "/" + folderSegments[i];
        }else{
            docFolder += folderSegments[i];
        }
 }*/
docFolder += '/Resized';
if(Folder(docFolder).exists == false){ new Folder(docFolder).create() };

app.bringToFront();

for(var a = 0; a < fileList.length; a++){
    // get a reference to the current (active) document and store it in a variable named "doc"
    var doc = open(fileList[a]);  
    var nameSegments = doc.name.toString().split('.');
    
    // change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
    doc.changeMode(ChangeMode.RGB);  

    // First we need to save it at it's full resolution at 300 dpi
    if (doc.width > doc.height) { 
         doc.resizeImage(undefined, undefined, 300, ResampleMethod.NONE);
         doc.resizeCanvas(doc.width, doc.width);
    } else if (doc.width < doc.height) { 
         doc.resizeImage(undefined, undefined, 300, ResampleMethod.NONE);
         doc.resizeCanvas(doc.height, doc.height);
    } else if (doc.width == doc.height) { 
         doc.resizeImage(undefined, undefined, 300, ResampleMethod.NONE);
         doc.resizeCanvas(doc.height, doc.height);
    } 
    var folderString = docFolder + '/FullResolution';
    if(Folder(folderString).exists == false) { new Folder(folderString).create() };
    var saveFile = File(folderString + '/' + doc.name);
    SaveJPEG(saveFile, 12);

    // Now we need to resize to different dimensions
     if (doc.width > doc.height || doc.width == doc.height) { 
          activeDocument.close(SaveOptions.DONOTSAVECHANGES);
         doc = open(fileList[a]);
         doc.resizeImage(UnitValue(100,"px"), null, 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(100, 100);
         folderString = docFolder + '/100x75';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         
         var saveFile = File(folderString+'/'+nameSegments[0] + '_100x75');
        SaveJPEG(saveFile,8);
        
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
        doc.resizeImage(UnitValue(200,"px"), null, 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(238, 238);
         
         folderString = docFolder + '/200x238';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_200x238');
        SaveJPEG(saveFile,8);
        
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
        doc.resizeImage(UnitValue(300,"px"), null, 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(300, 300);
         folderString = docFolder + '/300x225';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_300x225');
        SaveJPEG(saveFile,8);
        
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
        doc.resizeImage(UnitValue(1024,"px"), null, 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(1024, 1024);
         folderString = docFolder + '/1024x768';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_1024x768');
        SaveJPEG(saveFile,8);
        
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
        doc.resizeImage(UnitValue(3008,"px"), null, 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(3008, 3008);
         folderString = docFolder + '/3008x1990';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_3008x1990');
        SaveJPEG(saveFile,8);
         
    } else if (doc.width < doc.height) { 
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
         doc.resizeImage(null, UnitValue(75, "px"), 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(100, 100);
         folderString = docFolder + '/100x75';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_100x75');
        SaveJPEG(saveFile,8);
        
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
        doc.resizeImage(null, UnitValue(238, "px"), 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(238, 238);
         folderString = docFolder + '/200x238';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_200x238');
        SaveJPEG(saveFile,8);
        
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
        doc.resizeImage(null, UnitValue(225, "px"), 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(300, 300);
         folderString = docFolder + '/300x225';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_300x225');
        SaveJPEG(saveFile,8);
        
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
        doc.resizeImage(null, UnitValue(768, "px"), 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(1024, 1024);
         folderString = docFolder + '/1024x768';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_1024x768');
        SaveJPEG(saveFile,8);
        
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc = open(fileList[a]);
        doc.resizeImage(null, UnitValue(1990, "px"), 72, ResampleMethod.BICUBIC);
         doc.resizeCanvas(3008, 3008);
         folderString = docFolder + '/3008x1990';
         if(Folder(folderString).exists == false) { new Folder(folderString).create() };
         var saveFile = File(folderString+'/'+nameSegments[0] + '_3008x1990');
        SaveJPEG(saveFile,8);
        
    }
    
    
    activeDocument.close(SaveOptions.DONOTSAVECHANGES);


  }

function SaveJPEG(saveFile, jpegQuality){
    jpgSaveOptions = new JPEGSaveOptions();
    jpgSaveOptions.embedColorProfile = true;
    jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpgSaveOptions.matte = MatteType.NONE;
    jpgSaveOptions.quality = jpegQuality; //1-12
    activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);
}