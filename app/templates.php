<?php

function baseurl(string $path, array $args = null, bool $absolute = false): string
{
    return fw()->baseurl($path, $args, $absolute);
}

function url(string $path, array $args = null, bool $absoulte = false): string
{
    return fw()->url($path, $args, $absoulte);
}

function asset(string $path, array $args = null, bool $absolute = false): string
{
    return baseurl('assets/' . $path, $args, $absolute);
}

function load(string $template, array $data = null): string
{
    $fw = fw();

    $data['fw'] = $fw;
    $data['fun'] = $fw->box;

    return $fw->load($template, $data);
}

function main(string $template, array $data = null): string
{
    return render($template, $data, 'main');
}

function render(string $template, array $data = null, string $layout = null): string
{
    $data['content'] = load($template, $data);

    return load($layout ?? 'base', $data);
}

function script_add(string ...$scripts): void {
    fw()->box->push('scripts', ...$scripts);
}

function module_add(string ...$modules): void {
    fw()->box->push('modules', ...$modules);
}

function style_add(string ...$styles): void {
    fw()->box->push('styles', ...$styles);
}

function scripts(): array {
    return fw()->box->scripts ?? array();
}

function modules(): array {
    return fw()->box->modules ?? array();
}

function styles(): array {
    return fw()->box->styles ?? array();
}

function menu_active(string $path): void {
    fw()->box->menu_active = '/' . ltrim($path, '/');
}
