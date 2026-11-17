// Prints "<file> W H x y w h" (the widest Vision face box, top-left origin, pixels) or "<file> NOFACE" for each image.
// Build: swiftc -O tools/femc-facebox.swift -o tools/.femc-facebox (femc-equinox-faces.py builds it on first use). Equinox art batch 4.
import Vision; import AppKit
for p in CommandLine.arguments.dropFirst() {
  guard let img = NSImage(contentsOfFile: p), let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { print(p, "NOIMG"); continue }
  let req = VNDetectFaceRectanglesRequest(); try? VNImageRequestHandler(cgImage: cg).perform([req])
  let W = Double(cg.width), H = Double(cg.height)
  if let f = (req.results ?? []).max(by: { $0.boundingBox.width < $1.boundingBox.width }) {
    let b = f.boundingBox; print(p.split(separator: "/").last!, Int(W), Int(H), String(format: "%.1f %.1f %.1f %.1f", b.minX*W, (1-b.maxY)*H, b.width*W, b.height*H))
  } else { print(p.split(separator: "/").last!, "NOFACE") }
}
