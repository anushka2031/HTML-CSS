
Gasp.fromTo(
    scene.rotation,
    {
        yoyo: true,
        ease: "power2.inOut",
        duration: 3
    }
);

function render(){
    requestAnimationFrame(render);
    geometry.setFromPoints(vertices);
    renderer.render(scene,camera);
}